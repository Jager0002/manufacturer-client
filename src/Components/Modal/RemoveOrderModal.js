import React from "react"

const RemoveOrderModal = ({handleCancel}) => {
  return (
    <>
      <input type="checkbox" id="remove-order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Order cancel confirmation</h3>
          <p className="py-4">
            This action cancels your order of this product. please confirm
            before proceeding furthure.
          </p>
          <div className="modal-action">
            <button className="btn btn-error" onClick={handleCancel}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RemoveOrderModal
