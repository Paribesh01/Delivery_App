import { AddProduct } from "../../components/AddProduct";
import { ProductsTable } from "../../components/ProductsTable";
import { SideBar } from "../../components/SideBar";

export function Ecommerce() {
  return (
    <>
      <div className=" flex h-screen overflow-hidden">
        <SideBar />

        <div className=" w-screen flex justify-center align-middle ">
          <ProductsTable />
        </div>
      </div>
    </>
  );
}
