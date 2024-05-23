import { db } from './firebase';
import { Order } from './types';
import { doc, getDoc, setDoc, updateDoc, runTransaction, arrayUnion } from 'firebase/firestore';

class OrderService {
  static async addOrder(userId: string, order: Omit<Order, 'userId'>): Promise<string> {
    const userRef = doc(db, 'users', userId);
    const orderRef = doc(db, 'orders', `${Date.now()}-${Math.random()}`);

    try {
      await runTransaction(db, async (transaction) => {
        transaction.set(orderRef, {
          ...order,
          userId
        });
        transaction.update(userRef, {
          orders: arrayUnion(orderRef.id)
        });
      });

      console.log('Order added successfully');
      return orderRef.id;
    } catch (error) {
      console.error('Error adding order: ', error);
      throw error;
    }
  }

  static async getOrder(orderId: string): Promise<Order | null> {
    try {
      const orderDoc = await getDoc(doc(db, 'orders', orderId));
      if (orderDoc.exists()) {
        return orderDoc.data() as Order;
      } else {
        console.log('No such order!');
        return null;
      }
    } catch (error) {
      console.error('Error getting order: ', error);
      throw error;
    }
  }

  static async updateOrder(orderId: string, orderData: Partial<Order>): Promise<void> {
    try {
      await updateDoc(doc(db, 'orders', orderId), orderData);
      console.log('Order updated successfully');
    } catch (error) {
      console.error('Error updating order: ', error);
      throw error;
    }
  }
}

export default OrderService;
