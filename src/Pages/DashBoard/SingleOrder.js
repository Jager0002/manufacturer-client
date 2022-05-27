import React, { useState } from "react"

const SingleOrder = ({ order, refetch }) => {
  const { partname, addquantity, productid, totalPrice, paid } = order
  const [isModal, setIsModal] = useState(false)
  const handleCancel = () => {
    if (isModal) {
      //cancel order
      refetch()
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
          <button className="btn btn-warning">cancel</button>
        </td>
      </tr>
      {isModal && (
        <label
          htmlFor="remove-order-modal"
          handleCancel={handleCancel}
          className="btn btn-danger"
        >
          cancel
        </label>
      )}
    </>
  )
}

export default SingleOrder
