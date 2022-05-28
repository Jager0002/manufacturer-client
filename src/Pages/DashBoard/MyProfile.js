import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"
import { useQuery } from "react-query"
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"
import auth from "../../Firebase/firebase.init"
import Spinner from "../../Components/Spinner/Spinner"
import { toast } from "react-toastify"

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
      toast.success("Profile Updated")
    })
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 justify-items-center items-center">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">My Profile</h2>
        <img src={user.photoURL} alt="" />
        <p>
          <span className="text-slate-500 underline">Name: </span>{" "}
          {user.displayName}
        </p>
        <p>
          <span className="text-slate-500 underline">Email: </span> {user.email}
        </p>
        <p>
          <span className="text-slate-500 underline">Address : </span>
          {profile.address}
        </p>
        <p>
          <span className="text-slate-500 underline"> Linkedin : </span>
          {profile.linkedin}
        </p>
        <p>
          <span className="text-slate-500 underline">Phone Number : </span>{" "}
          {profile.phoneNumber}
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-3/5 bg-gray-100 p-4 rounded-lg">
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
            className="input input-bordered w-full "
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
        <div className="mt-4">
          <button type="submit" className="btn btn-primary mx-auto block">
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default MyProfile
