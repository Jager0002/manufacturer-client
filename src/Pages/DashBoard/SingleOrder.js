import React, { useState } from "react"
import { toast } from "react-toastify"
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"
import RemoveOrderModal from "../../Components/Modal/RemoveOrderModal"

const SingleOrder = ({ order, refetch }) => {
  const { partname, addquantity, productid, totalPrice, paid, _id } = order
  const [isModal, setIsModal] = useState(false)
  const handleCancel = () => {
    if (isModal) {
      axiosBaseUrl.delete(`/order?id=${_id}`).then(() => {
        toast.success("order cancelled")
        refetch()
      })
    }
  }
  return (
    <>
      <tr>
        <td>{partname}</td>
        <td>{addquantity}</td>
        <td>{totalPrice}</td>
        <td>
          <div className={`${!paid ? "badge-error" : "badge-success"} badge`}>
            {paid ? "Paid" : "Unpaid"}
          </div>
        </td>
        <td>transaction id</td>
        <td>
          <label
            htmlFor="remove-order-modal"
            className="btn btn-warning"
            onClick={() => setIsModal(true)}
          >
            cancel
          </label>
        </td>
        <td>{isModal && <RemoveOrderModal handleCancel={handleCancel} />}</td>
      </tr>
    </>
  )
}

export default SingleOrder
