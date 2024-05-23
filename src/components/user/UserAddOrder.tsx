import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { Order } from "../../db/types";
import { userState } from "../../recoil/atoms";
import { useOrder } from "../../hooks/useOrder";

const UserAddOrder: React.FC = () => {
  const navigate = useNavigate();
  const { addOrder } = useOrder();
  const user = useRecoilValue(userState);
  const [formData, setFormData] = useState<Omit<Order, "id" | "userId">>({
    pickupLocation: "",
    dropoffLocation: "",
    receiverPhoneNo: "",
    status: "pending",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!user) {
        throw new Error("User not logged in");
      }
      const userId = user.id;
      const addedOrder = await addOrder(userId, formData);
      console.log("Order added:", addedOrder);
      setFormData({
        pickupLocation: "",
        dropoffLocation: "",
        receiverPhoneNo: "",
        status: "pending",
      });
      navigate("/ecommerce"); // Adjust the route as needed
    } catch (error) {
      console.error("Error adding order:", error);
    }
  };

  return (
    <div>
      <h2>Add Order</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pickupLocation">Pickup Location:</label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="dropoffLocation">Dropoff Location:</label>
          <input
            type="text"
            id="dropoffLocation"
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="receiverPhoneNo">Receiver Phone No:</label>
          <input
            type="text"
            id="receiverPhoneNo"
            name="receiverPhoneNo"
            value={formData.receiverPhoneNo}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Order</button>
      </form>
    </div>
  );
};

export default UserAddOrder;
