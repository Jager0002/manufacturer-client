import React from "react"
import Banner from "./Banner"
import BusinessSummary from "./BusinessSummary"
import Footer from "./Footer"
import Parts from "./Parts"
import Review from "./Review"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/*     

      2 more section
      
      */}
      <div className="space-y-20 my-14">
        <Parts></Parts>
        <BusinessSummary></BusinessSummary>
        <Review></Review>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Home
