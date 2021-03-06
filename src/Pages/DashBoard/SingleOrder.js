import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"
import RemoveOrderModal from "../../Components/Modal/RemoveOrderModal"

const SingleOrder = ({ order, refetch }) => {
  const { partname, addquantity, totalPrice, paid, _id, transactionId } = order
  const [isModal, setIsModal] = useState(false)
  const navigate = useNavigate()
  const handleCancel = () => {
    if (isModal && !paid) {
      axiosBaseUrl.delete(`/order?id=${_id}`).then((res) => {
        console.log(res)
        toast.success("Order Canceled")
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
        <td>{transactionId}</td>
        {!paid ? (
          <td>
            <label
              htmlFor="remove-order-modal"
              className="btn btn-warning"
              onClick={() => setIsModal(true)}
            >
              Cancel
            </label>
          </td>
        ) : (
          <td>
            <button className="btn btn-disabled">Cancel</button>
          </td>
        )}

        <td>
          <button
            onClick={() => navigate(`/paymentform/${_id}`)}
            className="btn btn-primary"
            disabled={paid}
          >
            Pay now
          </button>
        </td>

        <td>{isModal && <RemoveOrderModal handleCancel={handleCancel} />}</td>
      </tr>
    </>
  )
}

export default SingleOrder
