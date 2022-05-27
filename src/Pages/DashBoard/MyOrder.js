import React from "react"
import { useQuery } from "react-query"
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"
import SingleOrder from "./SingleOrder"

const MyOrder = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("rabbit2", () =>
    axiosBaseUrl(`/orders/all`).then((res) => res.data)
  )
  if (isLoading) return
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Transaction id</th>
            <th>pay/cancel</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <SingleOrder
              order={order}
              key={order._id}
              refetch={refetch}
            ></SingleOrder>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyOrder
