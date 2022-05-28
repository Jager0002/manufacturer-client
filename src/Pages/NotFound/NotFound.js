import React from "react"

const NotFound = () => {
  return (
    <div className="flex items-center flex-col justify-center h-[80vh]">
      <img
        src="https://i.ibb.co/GstPhMZ/A-404-Page-Best-Practices-and-Design-Inspiration.webp"
        alt=""
        className="w-[400px]"
      />
      <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
      <p className="font-medium">Looks like you lost your way. please navigate back to the page you came from</p>
    </div>
  )
}

export default NotFound
