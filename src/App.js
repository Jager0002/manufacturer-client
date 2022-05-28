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

import NotFound from "./Pages/NotFound/NotFound"

import MyOrder from "./Pages/DashBoard/MyOrder"
import AddAReview from "./Pages/DashBoard/AddAReview"
import MyProfile from "./Pages/DashBoard/MyProfile"
import MakeAdmin from "./Pages/DashBoard/MakeAdmin"
import ManageOrder from "./Pages/DashBoard/ManageOrder"
import PaymentForm from "./Pages/Purchase/PaymentForm"
import AllProducts from "./Pages/DashBoard/AllProducts"
import AddProduct from "./Pages/DashBoard/AddProduct"

function App() {
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
          path="/paymentform/:id"
          element={
            <RequireAuth>
              <PaymentForm />
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
        >
          <Route index element={<MyProfile />}></Route>
          <Route path="addreview" element={<AddAReview />}></Route>
          <Route path="myorder" element={<MyOrder />}></Route>
          <Route path="makeadmin" element={<MakeAdmin />}></Route>
          <Route path="manageorder" element={<ManageOrder />}></Route>
          <Route path="allproducts" element={<AllProducts />}></Route>
          <Route path="addproduct" element={<AddProduct />}></Route>
        </Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound />}></Route>

        {/* 404 page */}
      </Routes>
    </div>
  )
}

export default App
