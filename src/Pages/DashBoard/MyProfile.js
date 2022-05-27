import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"
import { useQuery } from "react-query"
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"
import auth from "../../Firebase/firebase.init"
import Spinner from "../../Components/Spinner/Spinner"

const MyProfile = () => {
  const [user] = useAuthState(auth)
  const { register, handleSubmit, reset } = useForm()
  const {
    data: profile,
    isLoading,
    refetch,
  } = useQuery(["rabbit5", user.email], () =>
    axiosBaseUrl(`/profile?email=${user.email}`).then((res) => res.data)
  )
  if (isLoading) return <Spinner></Spinner>
  const onSubmit = (data) => {
    axiosBaseUrl.put(`/profile?email=${user.email}`, data).then(() => {
      refetch()
      reset()
    })
  }
  return (
    //for user and admin
    // the user will see their name and email address on this profile
    // different fields like education location phone number linkedin profile link etc (save this in database also can update)

    <div className="md:grid grid-cols-2">
      <div>
        <h2>My Profile</h2>
        <img src={user.photoURL} alt="" />
        <p>Name: {user.displayName}</p>
        <p>Email: {user.email}</p>
        <p>Address :{profile.address}</p>
        <p>Linkedin :{profile.linkedin}</p>
        <p>Phone Number : {profile.phoneNumber}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("address")}
          />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">linkedin</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("linkedin")}
          />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("phoneNumber")}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  )
}

export default MyProfile
