import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import axiosBaseUrl from "../../Api/axiosBaseUrl"
import Purchase from "../Purchase/Purchase"
import Banner from "./Banner"
import BusinessSummary from "./BusinessSummary"
import Parts from "./Parts"
import SinglePart from "./SinglePart"

const Home = () => {
  return (
    <div>
      <p>This is home</p>

      <Banner></Banner>
      {/* 
      parts 
      Business Summary
      Footer
      Reviews

      2 more section
      
      */}
      <Parts></Parts>

      <Link to="/purchase">purchase</Link>
      <BusinessSummary></BusinessSummary>
    </div>
  )
}

export default Home
