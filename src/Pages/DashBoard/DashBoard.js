import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, Outlet } from "react-router-dom"
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"
import Spinner from "../../Components/Spinner/Spinner"
import auth from "../../Firebase/firebase.init"

const DashBoard = () => {
  const [user] = useAuthState(auth)
  const [admin, setAdmin] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (user?.email) {
      setIsLoading(true)
      axiosBaseUrl(`/user/single?email=${user.email}`).then((res) => {
        setAdmin(res.data)
        setIsLoading(false)
      })
    }
  }, [user, setAdmin])

  if (isLoading) return <Spinner></Spinner>
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-2">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-zinc-100 text-base-content">
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          {admin.role === "admin" ? (
            <>
              <li>
                <Link to="/dashboard/makeadmin">Make Admin</Link>
                <Link to="/dashboard/addproduct">Add Product</Link>
                <Link to="/dashboard/manageorder">Manage order</Link>
                <Link to="/dashboard/allproducts">Manage Products</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/addreview">Add Review</Link>
              </li>
              <li>
                <Link to="/dashboard/myorder">My Orders</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default DashBoard
