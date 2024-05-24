import { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { userState } from "../../recoil/atoms";
import { useOrder } from "../../hooks/useOrder";

export function UserOrderTable() {
  const { getUserOrders, orders, deleteOrder, updateOrder } = useOrder();
  const user = useRecoilValue(userState);

  useEffect(() => {
    if (user) {
      getUserOrders(user.id);
    }
  }, [user, getUserOrders]);

  const handleEdit = (order: any) => {
    const updatedOrder = { ...order };

    const newPickupLocation = prompt(
      "Enter updated Pickup Location:",
      order.pickupLocation
    );
    if (newPickupLocation !== null) {
      updatedOrder.pickupLocation = newPickupLocation;
    }

    const newDropoffLocation = prompt(
      "Enter updated Dropoff Location:",
      order.dropoffLocation
    );
    if (newDropoffLocation !== null) {
      updatedOrder.dropoffLocation = newDropoffLocation;
    }

    const newReceiverPhoneNo = prompt(
      "Enter updated Receiver Phone No:",
      order.receiverPhoneNo
    );
    if (newReceiverPhoneNo !== null) {
      updatedOrder.receiverPhoneNo = newReceiverPhoneNo;
    }

    updateOrder(order.id, updatedOrder);
  };

  return (
    <div>
      <h2>User Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Pickup Location</th>
            <th>Dropoff Location</th>
            <th>Receiver Phone No</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.pickupLocation}</td>
              <td>{order.dropoffLocation}</td>
              <td>{order.receiverPhoneNo}</td>
              <td>{order.status}</td>
              <td>
                <button
                  onClick={() => handleEdit(order)}
                  className="bg-blue-400"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteOrder(order.id)}
                  className="bg-red-400"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
