import React from "react"
import { useForm } from "react-hook-form"
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"

const AddProduct = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    let { availableQuantity, price, ...rest } = data
    availableQuantity = parseInt(availableQuantity)
    price = parseInt(price)
    const part = { ...rest, availableQuantity, price }
    axiosBaseUrl.post(`/parts`, part).then((res) => res.data)
  }

  return (
    <div>
      <div className="w-3/5 md:w-1/3 mx-auto">
        <h2 className="font-semibold text-3xl text-center mt-4">
          Add new Item
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="name">
              Name
            </label>
            <input
              className=" p-3 mt-2 outline-none bg-gray-100"
              id="name"
              type="text"
              placeholder="enter name"
              {...register("name", { required: true })}
            />
          </div>

          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="minimumQuantity">
              Minimum Quantity
            </label>
            <input
              className=" p-3 mt-2 outline-none bg-gray-100"
              id="minimumQuantity"
              type="text"
              placeholder="minimumQuantity"
              {...register("minimumQuantity", { required: true })}
            />
          </div>

          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="price">
              Price
            </label>
            <input
              className=" p-3 mt-2 outline-none bg-gray-100"
              id="price"
              type="text"
              placeholder="enter price"
              {...register("price", { required: true })}
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="availableQuantity">
              Available Quantity
            </label>
            <input
              className=" p-3 mt-2 outline-none bg-gray-100"
              id="availableQuantity"
              type="text"
              placeholder="enter availableQuantity"
              {...register("availableQuantity", { required: true })}
            />
          </div>

          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="name">
              Description
            </label>
            <textarea
              className=" p-3 mt-2 outline-none bg-gray-100"
              id="description"
              type="text"
              rows="5"
              placeholder="description"
              {...register("description", { required: true })}
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="image">
              Image url
            </label>
            <input
              className=" p-3 mt-2 outline-none bg-gray-100"
              id="image"
              type="text"
              placeholder="Enter image Url"
              {...register("image", { required: true })}
            />
          </div>
          <div className="text-center">
            <input
              className="m-2 cursor-pointer border bg-theme text-white p-4 px-8 hover:bg-accent rounded-md"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
