import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { Product, addProduct } from "../../db/productService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddProduct() {
  const navigate = useNavigate();
  //   const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState<Product>({
    name: "",
    description: "",
    price: 0,
    imageurl: "",
  });
  //   const [name,setName] = useState<string>()
  //   const [des,setDes] = useState<string>()
  //   const [image,setImageurl] = useState<string>()
  //   const [price,setPrice] = useState<number>()
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // console.log(e.target);
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Product added");
    try {
      await addProduct(formData);
      //   setProducts((prevProducts) => [
      //     ...prevProducts,
      //     { ...formData, id: productId },
      //   ]);
      setFormData({ name: "", description: "", price: 0, imageurl: "" });
      navigate("/ecommerce");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Add Product
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter the details of your products
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Product Name
          </Typography>

          <Input
            name="name"
            size="lg"
            placeholder="Product Name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            onChange={handleInputChange}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Description
          </Typography>
          <Textarea
            name="description"
            onChange={handleInputChange}
            label="Description"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Image Url
          </Typography>
          <Input
            name="imageurl"
            size="lg"
            placeholder="ImageUrl"
            onChange={handleInputChange}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Price
          </Typography>
          <Input
            name="price"
            type="number"
            size="lg"
            placeholder="Price"
            onChange={handleInputChange}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <Button type="sumbit" className="mt-6" fullWidth>
          Add
        </Button>
      </form>
    </Card>
  );
}
