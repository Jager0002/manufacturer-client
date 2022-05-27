import React from "react"
import { useQuery } from "react-query"
import { axiosBaseUrlPublic } from "../../Api/axiosBaseUrl"
import Spinner from "../../Components/Spinner/Spinner"

const BusinessSummary = () => {
  const { data: summary, isLoading } = useQuery("summary", () =>
    axiosBaseUrlPublic("/summary").then((res) => res.data)
  )
  if (isLoading) return <Spinner></Spinner>
  return (
    <>
      <p className="text-3xl text-center mb-8 font-bold">
        Our trustworthy business
      </p>
      <div className="sm:grid grid-cols-2 lg:grid-cols-4 container mx-auto">
        {summary.map((stats) => (
          <Stats key={stats._id} stats={stats}></Stats>
        ))}
      </div>
    </>
  )
}

const Stats = ({ stats }) => {
  const { name, count, icon, detail, suffix } = stats
  return (
    <div className="grid justify-items-center text-center space-y-4">
      <img src={icon} alt="" />
      <div className="flex text-3xl font-bold">
        <span>{count}</span>
        <span>{suffix}</span>
      </div>
      <p className="font-medium">{name}</p>
      <p>{detail}</p>
    </div>
  )
}

export default BusinessSummary
