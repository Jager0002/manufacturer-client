import React from "react"
import { useQuery } from "react-query"
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"
import Spinner from "../../Components/Spinner/Spinner"
import SingleUser from "./SingleUser"

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("alluser", () => axiosBaseUrl("/user").then((res) => res.data))

  if (isLoading) return <Spinner></Spinner>

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <SingleUser
              user={user}
              key={user._id}
              refetch={refetch}
            ></SingleUser>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MakeAdmin
