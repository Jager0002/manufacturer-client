import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate } from "react-router-dom"
import Spinner from "../Components/Spinner/Spinner"
import auth from "../Firebase/firebase.init"
import useAdmin from "../Hooks/useAdmin"

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const [admin, adminLoading] = useAdmin(user)

  if (loading || adminLoading) {
    return <Spinner />
  }
  if (!user || admin !== "admin") {
    return <Navigate to="/" />
  }
  return children
}

export default RequireAdmin
