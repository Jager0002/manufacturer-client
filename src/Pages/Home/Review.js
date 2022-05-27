import { useQuery } from "react-query"
import { axiosBaseUrlPublic } from "../../Api/axiosBaseUrl"
import Spinner from "../../Components/Spinner/Spinner"
import SingleReview from "./SingleReview"

const Review = () => {
  const { data, isLoading } = useQuery("reviews", () =>
    axiosBaseUrlPublic("/review").then((res) => res.data)
  )
  // console.log(data)

  if (isLoading) return <Spinner />

  return (
    <div className="sm:grid grid-cols-2 lg:grid-cols-3 gap-8  w-4/5 mx-auto">
      {data.map((review) => (
        <SingleReview key={review._id} review={review} />
      ))}
    </div>
  )
}

export default Review
