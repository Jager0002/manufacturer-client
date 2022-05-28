import React, { useState } from "react"
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"
import { toast } from "react-toastify"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../Firebase/firebase.init"

const AddAReview = () => {
  const [user] = useAuthState(auth)
  const [rating, setRating] = useState(5)

  const handleAddReview = (event) => {
    event.preventDefault()
    const review = {
      reviewer: user.displayName,
      details: event.target.feedback.value,
      ratings: rating,
    }
    axiosBaseUrl.post(`/review`, review).then(() => {
      toast.success("thanks for review")
    })
  }
  return (
    // rating system
    // this will be added to the home page review section
    // every review on home page(no limit)
    <div className="mx-auto">
      <form onSubmit={handleAddReview}>
        <div className="rating py-4 flex justify-center">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
            onChange={() => setRating(1)}
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
            onChange={() => setRating(2)}
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
            onChange={() => setRating(3)}
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
            onChange={() => setRating(4)}
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
            onChange={() => setRating(5)}
          />
        </div>
        <div>
          <textarea
            id="feedback"
            rows="6"
            cols="60"
            name="feedback"
            className="border py-4"
            placeholder="give us some feedback"
          ></textarea>
        </div>
        <div className="py-2 flex justify-center">
          <button className="btn btn-primary " type="submit">
            add review
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddAReview
