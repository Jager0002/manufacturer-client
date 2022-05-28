import React from "react"

const Banner = () => {
  return (
    <div className="w-4/5 mx-auto grid md:grid-cols-2 items-center justify-items-center">
      <img src="https://i.ibb.co/TcKJ0ms/Banner.webp" alt="" className="justify-self-start"/>
      <div>
        <h2 className="text-4xl font-bold">Alyona Industries Ltd</h2>
        <p className="my-4 font-medium">Get Your parts Now</p>
        <button className="btn btn-primary">Get started</button>
      </div>
    </div>
  )
}

export default Banner
