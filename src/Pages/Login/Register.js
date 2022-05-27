import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import auth from "../../Firebase/firebase.init"
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth"
import { axiosBaseUrlPublic } from "../../Api/axiosBaseUrl"

const Register = () => {
  const [createUserWithEmailAndPassword, cUser, cLoading, cError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

  const [updateProfile, updating, updateError] = useUpdateProfile(auth)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" })

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  useEffect(() => {
    if (cUser?.user?.displayName) {
      const info = {
        email: cUser.user?.email,
        name: cUser.user?.displayName,
      }
      axiosBaseUrlPublic(`/login/${info.email}`).then((res) =>
        localStorage.setItem("accessToken", res.data?.accessToken)
      )
      axiosBaseUrlPublic.post("/profile", info).then((res) => res.data)
      navigate(from, { replace: true })
    }
  }, [cUser?.user?.email, cUser?.user?.displayName, from, navigate])

  const onSubmit = async (data) => {
    if (data.password !== data.rePassword) {
      toast.error("Password does not match")
      return
    }
    await createUserWithEmailAndPassword(data.email, data.password)
    const displayName = { displayName: data.name }
    await updateProfile(displayName)
    reset()
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                {...register("name", {
                  required: "Name is required",
                })}
              />

              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Invalid Email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 pl-2">{errors.email.message}</p>
              )}

              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Must be six or avobe" },
                })}
              />
              {errors.password && (
                <p className="text-red-500 pl-2">{errors.password.message}</p>
              )}
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("rePassword", {
                  required: "Confirm Password is required",
                  minLength: { value: 6, message: "Must be six or avobe" },
                })}
              />
              {errors.rePassword && (
                <p className="text-red-500 pl-2">{errors.rePassword.message}</p>
              )}

              <label className="label">
                <Link className="label-text-alt link link-hover" to={"/login"}>
                  Already have an account?
                </Link>
              </label>

              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
