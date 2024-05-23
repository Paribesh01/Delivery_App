import { useRecoilState } from 'recoil';
// import { useEffect } from 'react';
import { db } from '../db/firebase';
import { orderState } from '../recoil/atoms';
import { Order } from '../db/types';
import { doc, runTransaction, arrayUnion, getDocs, where, collection, query } from 'firebase/firestore';

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

  return { orders, addOrder, getUserOrders };
};
