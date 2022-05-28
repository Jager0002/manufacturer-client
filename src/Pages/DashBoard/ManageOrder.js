import React from 'react';
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"
import {useQuery} from 'react-query'
import Spinner from "../../Components/Spinner/Spinner"
import ManageSingleOrder from './ManageSingleOrder'

const ManageOrder = () => {
  const {data, isLoading, refetch} = useQuery('manageorder', ()=> axiosBaseUrl('/orders/all').then((res)=> res.data))

  if(isLoading) return <Spinner/>

  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Transaction id</th>
            <th>Deliver</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <ManageSingleOrder
            order={order}
              key={order._id}
              refetch={refetch}
            ></ManageSingleOrder>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;