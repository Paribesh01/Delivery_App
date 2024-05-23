import { SideBar } from "../../components/Admin/SideBar";

export default function UserEcommerce() {
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
