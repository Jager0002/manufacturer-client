const SingleReview = ({ review }) => {
  const { reviewer, details, ratings } = review
  const stars = [...Array(ratings)]

  return (
    <div className="card bg-gray-50">
      <div className="card-body">
        <div className="grid justify-items-center">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
          <h2 className="card-title">{reviewer}</h2>
          <div className="flex items-center">
            {stars.map((e, index) => (
              <span key={index} className="text-orange-400 text-xl">
                ★
              </span>
            ))}
            <span className="">({ratings})</span>
          </div>
        </div>

        <p>{details}</p>
      </div>
    </div>
  )
}
export default SingleReview
