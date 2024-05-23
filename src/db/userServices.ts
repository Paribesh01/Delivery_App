import { auth, db } from './firebase';
import { User } from './types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

class UserService {
  static async registerUser(email: string, password: string, userInfo: Omit<User, 'email' | 'orders'>): Promise<string> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      await setDoc(doc(db, 'users', userId), {
        ...userInfo,
        email,
        orders: []
      });

      console.log('User registered and user document created successfully');
      return userId;
    } catch (error) {
      console.error('Error registering user: ', error);
      throw error;
    }
  }

  static async getUser(userId: string): Promise<User | null> {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (userDoc.exists()) {
        return userDoc.data() as User;
      } else {
        console.log('No such user!');
        return null;
      }
    } catch (error) {
      console.error('Error getting user: ', error);
      throw error;
    }
  }

  static async updateUser(userId: string, userData: Partial<User>): Promise<void> {
    try {
      await updateDoc(doc(db, 'users', userId), userData);
      console.log('User updated successfully');
    } catch (error) {
      console.error('Error updating user: ', error);
      throw error;
    }
  }

  static async loginUser(email: string, password: string): Promise<string> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully');
      return userCredential.user.uid;
    } catch (error) {
      console.error('Error logging in user: ', error);
      throw error;
    }
  }

  static async logoutUser(): Promise<void> {
    try {
      await signOut(auth);
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Error logging out user: ', error);
      throw error;
    }
  }
}

export default UserService;
