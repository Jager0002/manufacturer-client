import React from "react"

const ShipmentFeature = () => {
  return (
    <>
      <h2 className="text-3xl text-center mb-8 font-bold">Shipment Offers</h2>
      <div className="w-4/5 grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center mx-auto">
        <div className="w-4/5">
          <img
            className="m-16"
            src={"https://i.ibb.co/MPq2m6R/offer.webp"}
            alt=""
          />
        </div>
        <div className="mt-4 p-12 lg:p-20 ">
          <h2 className="text-2xl">Our Shipping is extra affortable for</h2>
          <p className="w-4/5 mt-2">
            For middle east countries we made it possible to reduce the shipping
            cost. Also, Get voucher to have monthly offer in bulk shipping.
          </p>
        </div>
      </div>
    </>
  )
}

export default ShipmentFeature
