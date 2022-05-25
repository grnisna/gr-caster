import { Route, Routes } from "react-router-dom";
import AddReview from "./components/DashboardSection/AddReview";
import MyOrders from "./components/DashboardSection/MyOrders";
import AllProduct from "./components/PurchasePagesection/AllProduct";
import Blogs from "./pages/Blogs/Blogs";
import Dashboard from "./pages/Dashboard/Dashboard";

import Home from "./pages/HomePage/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import Purchase from "./pages/Purchases/Purchase";
import Footer from "./pages/SharedPages/Footer/Footer";

import Navbar from "./pages/SharedPages/Navbar/Navbar";
import RequireAuth from "./pages/SharedPages/RequireAuth/RequireAuth";

// toastify ------------
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./pages/Dashboard/Checkout";
import Payment from "./pages/Dashboard/Payment";

import AllUsers from "./components/DashboardSection/AllUsers";
import ManageItems from "./components/DashboardSection/ManageItems";
import AddNewItem from "./components/DashboardSection/AddNewItem";
import MyProfile from "./components/DashboardSection/MyProfile";


// data-theme="cupcake" 
function App() {
  return (
    <div >

     
        <Navbar>

          <Routes>
            <Route path="/" element={<Home></Home>} ></Route>
            <Route path="/home" element={<Home></Home>} ></Route>

            <Route path="/purchase" element={<RequireAuth><Purchase></Purchase></RequireAuth>} ></Route>
            <Route path="/allproduct/:id" element={<AllProduct></AllProduct>} ></Route>
            <Route path="/blogs" element={<Blogs></Blogs>} ></Route>

            {/* nested route  */}
            <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>} >
              {/* users panel   */}
              <Route index element={<MyOrders></MyOrders>}></Route>
              <Route path='/dashboard/myreview' element={<AddReview></AddReview>} > </Route>
              <Route path='/dashboard/myprofile' element={<MyProfile></MyProfile>} > </Route>
              
              <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>

              {/* admin panel  */}
              <Route path='/dashboard/admin' element={<AllUsers></AllUsers>} > </Route>
              <Route path='/dashboard/manageitems' element={<ManageItems></ManageItems>} > </Route>
              <Route path='/dashboard/addnewitem' element={<AddNewItem></AddNewItem>} > </Route>
            </Route>

            <Route path="/login" element={<Login></Login>} ></Route>
            <Route path="/signup" element={<Signup></Signup>} ></Route>

          </Routes>
          <Footer></Footer>
        </Navbar>
      <ToastContainer/>
    </div>
  );
}

export default App;
