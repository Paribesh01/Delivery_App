import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./routes/home/Home";
import { DashBoard } from "./routes/Admin/Dashboard";
import { Ecommerce } from "./routes/Admin/Ecommerce";
import { Add } from "./routes/Admin/Add";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/ecommerce" element={<Ecommerce />} />
      <Route path="/addproduct" element={<Add />} />
    </>
  )
);
