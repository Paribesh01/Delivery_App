import React, { useState, useEffect } from "react";
import {
  Product,
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../db/productService";

const ProductComponent: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState<Product>({
    name: "",
    description: "",
    price: 0,
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const productId = await addProduct(formData);
      console.log("Product added");
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...formData, id: productId },
      ]);
      setFormData({ name: "", description: "", price: 0 });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleUpdate = async (
    productId: string | undefined,
    newData: Partial<Product>
  ) => {
    // Check if productId is defined before proceeding
    if (productId) {
      try {
        await updateProduct(productId, newData);
        const updatedProducts = products.map((product) =>
          product.id === productId ? { ...product, ...newData } : product
        );
        setProducts(updatedProducts);
      } catch (error) {
        console.error("Error updating product:", error);
      }
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
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.description} - ${product.price}
            <button onClick={() => handleDelete(product.id)}>Delete</button>
            <button
              onClick={() => handleUpdate(product.id, { name: "Updated Name" })}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Price"
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductComponent;
