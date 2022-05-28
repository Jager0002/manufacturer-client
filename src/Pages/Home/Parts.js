import React from "react"
import useParts from "../../Hooks/useParts"
import SinglePart from "./SinglePart"

const Parts = () => {
  const { parts, isLoading } = useParts()
  // console.log(parts)

  if (isLoading) return
  return (
    <div className="w-4/5 mx-auto">
      <h2 className="text-3xl text-center mb-8 font-bold">Products</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-16 justify-items-center">
        {parts?.map((part) => (
          <SinglePart part={part} key={part.name}></SinglePart>
        ))}
      </div>
    </div>
  )
}

export default Parts
