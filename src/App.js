import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import Purchase from "./pages/Purchases/Purchase";
import Footer from "./pages/SharedPages/Footer/Footer";

import Navbar from "./pages/SharedPages/Navbar/Navbar";


// data-theme="cupcake" 
function App() {
  return (
    <div >

      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} ></Route>
          <Route path="/home" element={<Home></Home>} ></Route>
          <Route path="/purchase" element={<Purchase></Purchase>} ></Route>
          <Route path="/blogs" element={<Blogs></Blogs>} ></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>} ></Route>
          <Route path="/login" element={<Login></Login>} ></Route>
          <Route path="/signup" element={<Signup></Signup>} ></Route>

        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
