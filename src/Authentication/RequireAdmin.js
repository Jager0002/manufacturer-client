import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom"
import { axiosBaseUrl } from "../Api/axiosBaseUrl"
import auth from "../Firebase/firebase.init"

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const [role, setRole] = useState("")
  axiosBaseUrl(`/user/single?email=${user.email}`).then((res) =>
    setRole(res.data?.role)
  )

  if (loading) {
    return
  }
  if (role !== "admin") {
    return <Navigate to="/"></Navigate>
  }

  return children
}

export default RequireAdmin
