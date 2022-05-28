import React from "react"

const RemoveProduct = ({ handleProduct }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="remove-product-modal"
        className="modal-toggle"
      />
      <label htmlFor="remove-product-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Are you sure you want to remove this part?
          </h3>
          <button onClick={handleProduct} className="btn btn-primary my-4">
            Remove
          </button>
        </label>
      </label>
    </div>
  )
}

export default RemoveProduct
