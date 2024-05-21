import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase"; // Assuming you have initialized Firestore elsewhere

// Interface for the product object
export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
}

// Function to add a new product to the Firestore collection
export const addProduct = async (productData: Product): Promise<string> => {
  try {
    if(productData?.id){

        const docRef = await addDoc(collection(db, "products"), productData);
        return docRef.id; // Return the ID of the newly created document
    }else{
        const docRef = await addDoc(collection(db, "products"), productData);

        return docRef.id; // Return the ID of the newly created document
    }
  } catch (error) {
    console.error("Error adding product: ", error);
    throw error; // Throw the error for handling in the component
  }
};

// Function to fetch all products from the Firestore collection
export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products: Product[] = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Product));
    return products;
  } catch (error) {
    console.error("Error getting products: ", error);
    throw error;
  }
};

// Function to update an existing product in the Firestore collection
export const updateProduct = async (productId: string, newData: Partial<Product>): Promise<void> => {
  try {
    await updateDoc(doc(db, "products", productId), newData);
  } catch (error) {
    console.error("Error updating product: ", error);
    throw error;
  }
};

// Function to delete a product from the Firestore collection
export const deleteProduct = async (productId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, "products", productId));
  } catch (error) {
    console.error("Error deleting product: ", error);
    throw error;
  }
};
