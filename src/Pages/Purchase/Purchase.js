import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"
import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"
import auth from "../../Firebase/firebase.init"

const Purchase = () => {
  const [user] = useAuthState(auth)
  const { id } = useParams()

  // protected
  //     redirects to login if no user
  //     after login dont redirect to login

  const { data: part, isLoading } = useQuery(["rabbit", id], () =>
    axiosBaseUrl(`/part/${id}`).then((res) => res.data)
  )

  if (isLoading) return

  return (
    <div className="w-4/5 mx-auto">
      <div
        className="grid lg:grid-cols-2 
      grid-cols-1 justify-items-center"
      >
        <img src={part.image} alt="" />
        <div className="pt-16">
          <h2 className="py-4 text-xl">{part.name}</h2>
          <h2 className="">{part.description}</h2>
          <h2 className="py-4">Price: {part.price}$</h2>
        </div>
      </div>

      <div className="mx-auto">
        <PurchaseForm user={user} part={part}></PurchaseForm>
      </div>
    </div>
  )
}

function PurchaseForm({ part, user }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      addquantity: part.minimumQuantity,
    },
  })
  const navigate = useNavigate()
  const onSubmit = (data) => {
    const { addquantity, ...rest } = data
    const quantity = parseInt(addquantity)
    const totalPrice = quantity * part.price
    const order = { ...rest, addquantity: quantity, totalPrice: totalPrice }
    axiosBaseUrl.post("/order", order).then(() => {
      navigate("/dashboard/myOrder")
    })
    console.log(order)
  }

  return (
    <div className="w-96 mx-auto">
      <div className="">
        <h1 className="text-5xl text-center font-bold">Purchase</h1>
        <p className="py-6"></p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-base-200">
          <div className="flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={user.displayName}
                    readOnly
                    {...register("name")}
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={user.email}
                    readOnly
                    {...register("email")}
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text">Part Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={part.name || ""}
                    readOnly
                    {...register("partname")}
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text">Product Id</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={part._id || ""}
                    readOnly
                    {...register("productid")}
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text">Add Quantity</span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered w-full"
                    {...register("addquantity", {
                      required: "quantity can't be empty",
                      min: {
                        value: part.minimumQuantity,
                        message: "Select minimum",
                      },
                      max: {
                        value: part.availableQuantity,
                        message: "Select within storage",
                      },
                    })}
                  />
                  {errors?.addquantity && (
                    <p className="text-red-500 pl-2">
                      {errors.addquantity.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text">Delivary Address</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    {...register("delivaryaddress", {
                      required: "address is required",
                    })}
                  />
                  {errors?.delivaryaddress && (
                    <p className="text-red-500 pl-2">
                      {errors.delivaryaddress.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text">Contact Number</span>
                  </label>
                  <input
                    type="text"
                    className="input 
                    input-bordered w-full"
                    {...register("contactnumber", {
                      required: "Contact Number is required",
                    })}
                  />
                  {errors?.contactnumber && (
                    <p className="text-red-500 pl-2">
                      {errors.contactnumber.message}
                    </p>
                  )}
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={errors.addquantity ? true : false}
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Purchase
