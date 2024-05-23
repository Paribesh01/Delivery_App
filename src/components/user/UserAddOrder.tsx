import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../../hooks/useOrder";
import { Order } from "../../db/types";

export function UserAddOrder() {
  const navigate = useNavigate();
  const { addOrder } = useOrder();
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
      const userId = "user-id-placeholder"; // Replace this with actual user ID from context or state
      await addOrder(userId, formData);
      setFormData({
        pickupLocation: "",
        dropoffLocation: "",
        receiverPhoneNo: "",
        status: "pending",
      });
      navigate("/orders"); // Adjust the route as needed
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
}
