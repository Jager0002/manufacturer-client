import React, { useState } from "react"
import RemoveOrderModal from "../../Components/Modal/RemoveOrderModal"
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"
import { toast } from "react-toastify"

const ManageSingleOrder = ({ order, refetch }) => {
  const {
    partname,
    addquantity,
    totalPrice,
    paid,
    _id,
    transactionId,
    shipped,
    productid,
  } = order
  const [isModal, setIsModal] = useState(false)

  const handleCancel = () => {
    if (isModal && !paid) {
      axiosBaseUrl.delete(`/order?id=${_id}`).then((res) => {
        toast.success("Order Canceled")
        refetch()
      })
    }
  }

  const handleShip = () => {
    const shipmentInfo = {
      productid,
      shipped: true,
      addquantity,
    }
    axiosBaseUrl.patch(`/order/confirm/${_id}`, shipmentInfo).then(() => {
      toast.success("product shipped")
      refetch()
    })
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
        {shipped && (
          <td>
            <div className="badge badge-success">shipped</div>
          </td>
        )}

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
            {!shipped && (
              <button className="btn btn-secondary" onClick={handleShip}>
                ship now
              </button>
            )}
          </td>
        )}

        <td>
          {isModal && isModal && (
            <RemoveOrderModal handleCancel={handleCancel} />
          )}
        </td>
      </tr>
    </>
  )
}

export default ManageSingleOrder
