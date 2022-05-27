import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Login/Register"
import { ToastContainer, Slide } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import RequireAuth from "./Authentication/RequireAuth"
import Purchase from "./Pages/Purchase/Purchase"
import Navbar from "./Components/Navbar/Navbar"
import DashBoard from "./Pages/DashBoard/DashBoard"
import Blogs from "./Pages/Blogs/Blogs"

import AddAReview from "./Pages/AddAReview/AddAReview"
import MyProfile from "./Pages/MyProfile/MyProfile"
import NotFound from "./Pages/NotFound/NotFound"
import Payment from "./Pages/Purchase/Payment"
import MyOrder from "./Pages/DashBoard/MyOrder"

function App() {
  // prettier-ignore
  return (
    <div>
      <ToastContainer autoClose={3000} transition={Slide} />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/payment"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound />}></Route>

        {/* 404 page */}
      </Routes>
    </div>
  )
}

export default App
