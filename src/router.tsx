import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./routes/home/Home";
import About from "./routes/home/About";
import Contact from "./routes/home/Contact";
import Signup from "./routes/Auth/Signup";
import Login from "./routes/Auth/Login";
import AddOrder from "./routes/userDashboard/AddOrder";
import UserDashBoard from "./routes/userDashboard/UserDashboard";
import { DashBoard } from "./routes/Admin/Dashboard";
// import { DashBoard } from "./routes/Admin/Dashboard";
// import { Ecommerce } from "./routes/Admin/Ecommerce";
// import { Add } from "./routes/Admin/Add";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/add-order" element={<AddOrder />} />
      <Route path="/dashboard" element={<UserDashBoard />} />

      {/* <Route path="/admin/" element={<DashBoard />} /> */}
      <Route path="/admin/dashboard" element={<DashBoard />} />
    </>
  )
);
