import React, { useState } from "react"
import { useQuery } from "react-query"
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"
import RemoveProduct from "../../Components/Modal/RemoveProduct"
import Spinner from "../../Components/Spinner/Spinner"
import SingleProduct from "./SingleProduct"

const AllProducts = () => {
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("rabbit8", () => axiosBaseUrl(`/parts`).then((res) => res.data))
  if (isLoading) return <Spinner />
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Part Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part) => (
            <SingleProduct
              part={part}
              key={part._id}
              refetch={refetch}
            ></SingleProduct>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllProducts
