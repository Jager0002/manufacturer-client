import React from "react"
import { Link, Outlet } from "react-router-dom"

const DashBoard = () => {
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
          <li>
            <Link to="/dashboard/addreview">Add Review</Link>
          </li>
          <li>
            <Link to="/dashboard/myorder">My Orders</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DashBoard
