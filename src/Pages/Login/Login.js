import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import auth from "../../Firebase/firebase.init"
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { toast } from "react-toastify"

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth)

  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  if (eUser || gUser) {
    navigate(from, { replace: true })
  }

  const onSubmit = (data) => {
    if (eUser) toast.success("You are logged in")
    signInWithEmailAndPassword(data.email, data.password)
    console.log("RESULT", data)
    reset()
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
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
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
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
                <Link
                  className="label-text-alt link link-hover"
                  to={"/register"}
                >
                  Don't have an account?
                </Link>
              </label>

              <button
                type="button"
                className="label-text-alt link link-hover"
                onClick={() => signInWithGoogle()}
              >
                Sign In with Google
              </button>

              <button type="submit" className="btn btn-primary mt-6">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
