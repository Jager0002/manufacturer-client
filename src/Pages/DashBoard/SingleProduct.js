import React, { useState } from "react"
import { toast } from "react-toastify"
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"
import RemoveProduct from "../../Components/Modal/RemoveProduct"

const SingleProduct = ({ part, refetch }) => {
  const { name, availableQuantity, price, _id } = part

  const [isModal, setIsModal] = useState(false)

  const handleProduct = () => {
    if (isModal) {
      axiosBaseUrl.delete(`/part/delete?id=${_id}`).then(() => {
        toast.success("Part Removed")
        refetch()
      })
    }
  }

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{availableQuantity}</td>
        <td>{price}</td>
        <td>
          <label
            htmlFor="remove-product-modal"
            className="btn btn-error"
            onClick={() => setIsModal(true)}
          >
            Delete
          </label>
        </td>

        <td>{isModal && <RemoveProduct handleProduct={handleProduct} />}</td>
      </tr>
    </>
  )
}

export default SingleProduct
