import { useRecoilState } from 'recoil';
// import { useEffect } from 'react';
import { db } from '../db/firebase';
import { orderState } from '../recoil/atoms';
import { Order, User } from '../db/types';
import { doc, runTransaction, arrayUnion, getDocs, where, collection, query, getDoc } from 'firebase/firestore';

export const useOrder = () => {
  const [orders, setOrders] = useRecoilState(orderState);

  const addOrder = async (userId: string, order: Omit<Order, 'userId' | 'id'>): Promise<void> => {
    const userRef = doc(db, 'users', userId);
    const orderRef = doc(db, 'orders', `${Date.now()}-${Math.random()}`);

    try {
      await runTransaction(db, async (transaction) => {
        const userDoc = await transaction.get(userRef);
        if (!userDoc.exists()) {
          throw new Error('User does not exist');
        }

        const newOrder: Order = { id: orderRef.id, userId, ...order };

        transaction.set(orderRef, newOrder);
        transaction.update(userRef, {
          orders: arrayUnion(orderRef.id)
        });

        setOrders((prevOrders) => [...prevOrders, newOrder]);
      });

      console.log('Order added successfully');
    } catch (error) {
      console.error(error);
    }
  };

  
  const getUserOrders = async (userId: string): Promise<void> => {
    const q = query(collection(db, 'orders'), where('userId', '==', userId));

    try {
      const querySnapshot = await getDocs(q);
      const userOrders: Order[] = [];
      querySnapshot.forEach((doc) => {
        userOrders.push(doc.data() as Order);
      });

      setOrders(userOrders);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllOrders = async (): Promise<void> => {
    const q = query(collection(db, 'orders'));

    try {
      const querySnapshot = await getDocs(q);
      const allOrders: Order[] = [];
      for (const docSnap of querySnapshot.docs) {
        const orderData = docSnap.data() as Order;
        const userRef = doc(db, 'users', orderData.userId);
        const userDoc = await getDoc(userRef);
        const userData = userDoc.exists() ? (userDoc.data() as User) : null;

        allOrders.push({ ...orderData, user: userData });
      }

      setOrders(allOrders);
    } catch (error) {
      console.error(error);
    }
  };

  return { orders, addOrder, getUserOrders, getAllOrders };
};
