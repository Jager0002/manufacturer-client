import React from "react"

const MakeAdminModal = ({ handleAdmin }) => {
  return (
    <div>
      <input type="checkbox" id="admin-modal" className="modal-toggle" />
      <label htmlFor="admin-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Are you sure you want to make this user admin?
          </h3>
          <button onClick={handleAdmin} className="btn btn-primary my-4">
            Make Admin
          </button>
        </label>
      </label>
    </div>
  )
}

export default MakeAdminModal
