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
    
    <div className="flex items-center justify-center flex-col gap-5">
      <h2 className="font-bold text-2xl">All Orders</h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                User Email
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
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {order.id}
                </th>
                <td className="px-6 py-4">
                  {order.user?.name}
                </td>
                <td className="px-6 py-4">
                  {order.user?.email}
                </td>
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
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
