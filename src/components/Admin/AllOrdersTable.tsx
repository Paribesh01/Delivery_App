import { useEffect } from "react";
import { useOrder } from "../../hooks/useOrder";

export function AllOrdersTable() {
  const { getAllOrders, orders } = useOrder();

  useEffect(() => {
    getAllOrders();
  }, [getAllOrders]);

  if (!orders) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>All Orders</h2>
      <table className="border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600 ...">Order ID</th>
            <th className="border border-slate-600 ...">User Name</th>
            <th className="border border-slate-600 ...">User Email</th>
            <th className="border border-slate-600 ...">Pickup Location</th>
            <th className="border border-slate-600 ...">Dropoff Location</th>
            <th className="border border-slate-600 ...">Receiver Phone No</th>
            <th className="border border-slate-600 ...">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border border-slate-700 ...">{order.id}</td>
              <td className="border border-slate-700 ...">
                {order.user?.name}
              </td>
              <td className="border border-slate-700 ...">
                {order.user?.email}
              </td>
              <td className="border border-slate-700 ...">
                {order.pickupLocation}
              </td>
              <td className="border border-slate-700 ...">
                {order.dropoffLocation}
              </td>
              <td className="border border-slate-700 ...">
                {order.receiverPhoneNo}
              </td>
              <td className="border border-slate-700 ...">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
