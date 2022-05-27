import React from "react"

const Footer = () => {
  const date = new Date()
  const handleNews = (event) => {
    event.preventDefault()
  }
  return (
    <div className="py-8 bg-gray-50">
      <div className="w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-5 gap-4 lg:justify-items-center items-center">
        <div className="w-1/2 mx-auto">
          <h2 className="font-semibold mb-2">Solution</h2>
          <ul>
            <li>Parts</li>
            <li>Accessories</li>
            <li>Wearings</li>
          </ul>
        </div>
        <div className="w-1/2 mx-auto">
          <h2 className="font-semibold mb-2">Work</h2>
          <ul>
            <li>Internship</li>
            <li>Career</li>
            <li>Job opportunity</li>
          </ul>
        </div>
        <div className="w-1/2 mx-auto">
          <h2 className="font-semibold mb-2">Blog</h2>
          <ul>
            <li>Marketing</li>
            <li>Production</li>
            <li>Management</li>
          </ul>
        </div>
        <div className="w-4/5 md:w-3/5 mx-auto col-span-2">
          <h2 className="font-semibold mb-2">Newsletter </h2>

          <form onSubmit={handleNews}>
            <div className="flex flex-col gap-2">
              <input
                className="p-2 focus:outline-primary"
                type="email"
                name="email"
                placeholder="enter email"
              />
              <button type="submit" className="btn btn-primary border-none">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="mt-5 text-center">
        &copy; copyright Aloyna {date.getFullYear()}
      </p>
    </div>
  )
}

export default Footer
