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
    <div className="flex items-center justify-center flex-col gap-5">
      <h2 className="font-bold text-2xl">User Orders</h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                Pickup Location
              </th>
              <th scope="col" className="px-6 py-3">
                DropOff Location
              </th>
              <th scope="col" className="px-6 py-3">
                Receiver Phone No.
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {order.id}
                </th>
                <td className="px-6 py-4">
                  {order.pickupLocation}
                </td>
                <td className="px-6 py-4">
                  {order.dropoffLocation}
                </td>
                <td className="px-6 py-4">
                  {order.receiverPhoneNo}
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{order.status}</a>
                </td>
                <td className="px-6 py-4 flex gap-4">
                  <button
                    onClick={() => handleEdit(order)}
                    className="bg-blue-400 px-2 py-1 rounded-sm font-semibold text-white text-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="bg-red-400 px-2 py-1 rounded-sm font-semibold text-white text-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* <table>
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
      </table> */}
    </div>
  );
}
