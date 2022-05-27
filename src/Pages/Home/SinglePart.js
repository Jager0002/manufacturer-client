import React from "react"
import { Link } from "react-router-dom"

const SinglePart = ({ part }) => {
  const {
    name,
    image,
    description,
    minimumQuantity,
    availableQuantity,
    price,
    _id,
  } = part
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-2xl">{name}</h2>
        <p>{description.slice(0, 200)}</p>
        <p>Minimum Quantinty :{minimumQuantity}</p>
        <p>Available Quantinty :{availableQuantity}</p>
        <p>Price :{price}$</p>
        <div className="card-actions">
          <Link to={`/purchase/${_id}`} className="btn btn-primary">
            Purchase
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SinglePart
