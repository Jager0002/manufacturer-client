import React from "react"

const ShipmentFeature = () => {
  return (
    <>
      <h2 className="text-center text-4xl">Shipment Offers</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="w-4/5">
          <img
            className="m-16"
            src={
              "https://i.ibb.co/dG68nwn/delivery-dates-1-e1572017005409-820x330.jpg"
            }
            alt=""
          />
        </div>
        <div className="mt-4 p-12 lg:p-20 ">
          <h2 className="text-2xl">Our Shipping is extra affortable for</h2>
          <h2 className="text-lg mt-4">* Japan</h2>
          <h2 className="text-lg">* India</h2>
          <h2 className="text-lg">* China</h2>
          <h2 className="text-lg">* Bangladesh</h2>
        </div>
      </div>
    </>
  )
}

export default ShipmentFeature
