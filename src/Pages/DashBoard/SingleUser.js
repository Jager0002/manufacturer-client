import React, { useState } from "react"
import { toast } from "react-toastify"
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"
import MakeAdminModal from "../../Components/Modal/MakeAdminModal"

const SingleUser = ({ user, refetch }) => {
  const { email, role, _id } = user
  const [isModal, setIsModal] = useState(false)
  const handleAdmin = () => {
    if (isModal) {
      axiosBaseUrl.patch(`/user/${email}`).then(() => {
        toast.success("Role Changed")
        refetch()
      })
    }
  }
  return (
    <>
      <tr>
        <td>{email}</td>
        {role === "admin" ? (
          <td>
            <span className="badge badge-success">{role}</span>
          </td>
        ) : (
          <td>
            <span className="badge badge-primary">{role}</span>
          </td>
        )}

        <td>
          {role !== "admin" ? (
            <label
              htmlFor="admin-modal"
              className="btn btn-warning"
              onClick={() => setIsModal(true)}
            >
              Make Admin
            </label>
          ) : (
            <button className="btn btn-warning" disabled>Make Admin</button>
          )}
        </td>
        {isModal && (
          <td>{isModal && <MakeAdminModal handleAdmin={handleAdmin} />}</td>
        )}
      </tr>
    </>
  )
}

export default SingleUser
