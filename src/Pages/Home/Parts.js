import axios from "axios"
import React, { useEffect, useState } from "react"
import axiosBaseUrl from "../../Api/axiosBaseUrl"
import SinglePart from "./SinglePart"

const Parts = () => {
  const [parts, setParts] = useState([])
  useEffect(() => {
    axiosBaseUrl("/parts").then((res) => setParts(res.data))
  }, [])
  return (
    <div className="">
      <h2 className="text-center text-4xl m-4 ">Products</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
        {parts?.map((part) => (
          <SinglePart part={part} key={part.name}></SinglePart>
        ))}
      </div>
    </div>
  )
}

export default Parts
