import { useEffect, useState } from "react"
import { axiosBaseUrl } from "../Api/axiosBaseUrl"

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false)
  const [adminLoading, setAdminLoading] = useState(true)
  useEffect(() => {
    if (user.email) {
      axiosBaseUrl(`/user/single?email=${user.email}`).then((res) => {
        setAdmin(res.data?.role)
        setAdminLoading(false)
      })
    }
  }, [user.email])
  return [admin, adminLoading]
}
export default useAdmin
