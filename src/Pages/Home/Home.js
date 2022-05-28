import React from "react"
import Banner from "./Banner"
import BestSellingBike from "./BestSellingBike"
import BusinessSummary from "./BusinessSummary"
import Footer from "./Footer"
import Parts from "./Parts"
import Review from "./Review"
import ShipmentFeature from "./ShipmentFeature"

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
        <BestSellingBike></BestSellingBike>
        <ShipmentFeature></ShipmentFeature>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
