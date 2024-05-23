import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { auth, db } from '../db/firebase';
import { userState } from '../recoil/atoms';
import { User } from '../db/types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export const useUser = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        if (userDoc.exists()) {
          setUser({ id: firebaseUser.uid, ...userDoc.data() } as User);
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const registerUser = async (email: string, password: string, userInfo: Omit<User, 'email' | 'orders' | 'id'>): Promise<void> => {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      const newUser: User = { id: userId, email, orders: [], ...userInfo };

      await setDoc(doc(db, 'users', userId), newUser);

      setUser(newUser);
    } catch (error) {
      console.error(error);
    }
  };

  const loginUser = async (email: string, password: string): Promise<void> => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (userDoc.exists()) {
        setUser({ id: userId, ...userDoc.data() } as User);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logoutUser = async (): Promise<void> => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (userId: string, userData: Partial<User>): Promise<void> => {
    try {
      await updateDoc(doc(db, 'users', userId), userData);
      if (user) {
        setUser({ ...user, ...userData });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { user, registerUser, loginUser, logoutUser, updateUser };
};
