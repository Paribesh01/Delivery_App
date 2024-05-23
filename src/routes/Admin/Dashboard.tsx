import { useEffect, useState } from "react";
import {
  Product,
  deleteProduct,
  getAllProducts,
} from "../../db/productService";
import { SideBar } from "../../components/Admin/SideBar";

export function DashBoard() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products when component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const products = await getAllProducts();
      console.log(products);
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (productId: string | undefined) => {
    // Check if productId is defined before proceeding
    if (productId) {
      try {
        await deleteProduct(productId);
        const updatedProducts = products.filter(
          (product) => product.id !== productId
        );
        setProducts(updatedProducts);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <>
      <div className=" flex h-screen overflow-hidden">
        <SideBar />

        <div className="relative w-screen flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
}
