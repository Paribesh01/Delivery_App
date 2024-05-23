import { useEffect } from "react";
import { useRecoilValue } from "recoil";

// import { Order } from '../types';
import { userState } from "../../recoil/atoms";
import { useOrder } from "../../hooks/useOrder";

export function UserOrderTable() {
  const { getUserOrders, orders } = useOrder();
  const user = useRecoilValue(userState);

  useEffect(() => {
    if (user) {
      getUserOrders(user.id);
    }
  }, [user, getUserOrders]);

  if (!user || !orders) {
    return <p>Loading...</p>;
  }

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
