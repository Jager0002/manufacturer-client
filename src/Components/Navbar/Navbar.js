import { signOut } from "firebase/auth"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { NavLink, useLocation } from "react-router-dom"
import auth from "../../Firebase/firebase.init"

const Navbar = () => {
  const [user] = useAuthState(auth)
  const { pathname } = useLocation()

  return (
    // user will see dashboard, my orders,add a review, my profile.....(nested route)
    // my profile has an update profile option

    <div>
      <div className="navbar bg-base-100">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {pathname.includes("dashboard") || (
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            )}
            {pathname.includes("dashboard") && (
              <li>
                <label
                  htmlFor="dashboard-drawer"
                  className="drawer-button lg:hidden"
                >
                  Open drawer
                </label>
              </li>
            )}
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/myportfolio">Portfolio</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <NavLink to={"/"} className="btn btn-ghost normal-case text-xl">
            Alyona Industries Ltd.
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/myportfolio">Portfolio</NavLink>
            </li>
          </ul>
        </div>
        {user ? (
          <div>
            <p>{user.displayName} </p>
            <button onClick={() => signOut(auth)}> Sign Out</button>
          </div>
        ) : (
          <NavLink to="/login"> Login</NavLink>
        )}
      </div>
    </div>
  )
}

export default Navbar
