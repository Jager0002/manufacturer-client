import React from "react"

const BestSellingBike = () => {
  return (
    <>
      <h2 className="text-3xl text-center mb-8 font-bold">Our Best Offer</h2>
      <div className="w-4/5 grid lg:grid-cols-2 grid-cols-1 mx-auto justify-items-center">
        <div className="">
          <img
            src={
              "https://i.ibb.co/8rWwQ4T/honda-CRF-1000-L-Africa-Twin-2016-14-1-9175-medium.webp"
            }
            alt=""
          />
        </div>
        <div className="mt-10 lg:p-20 p-12">
          <h2 className="text-2xl ">BMW R1250GS</h2>
          <h2 className="text-lg my-4 ">The Dream Bike you can ask for</h2>
          <p>
            We have parts of this bike and we can fully customly make you this
            bike.
          </p>
        </div>
      </div>
    </>
  )
}

export default BestSellingBike
