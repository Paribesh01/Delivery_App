import { AllOrdersTable } from "../../components/Admin/AllOrdersTable";
import { SideBar } from "../../components/Admin/SideBar";

export function DashBoard() {
  return (
    <>
      <div className=" flex h-screen overflow-hidden bg-slate-100 gap-10">
        <SideBar />

        <div className=" flex justify-center items-center">
          <AllOrdersTable />
        </div>
      </div>
    </>
  );
}
