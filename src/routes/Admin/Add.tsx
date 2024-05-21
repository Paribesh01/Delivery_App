import { AddProduct } from "../../components/AddProduct";
import { SideBar } from "../../components/SideBar";

export function Add() {
  return (
    <>
      <div className=" flex h-screen overflow-hidden">
        <SideBar />

        <div className=" h-screen w-screen flex justify-center align-middle">
          <AddProduct />
        </div>
      </div>
    </>
  );
}
