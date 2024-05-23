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
      {/* <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/ecommerce" element={<Ecommerce />} />
      <Route path="/addproduct" element={<Add />} /> */}
    </>
  )
);
