import { AllOrdersTable } from "../../components/Admin/AllOrdersTable";
import { SideBar } from "../../components/Admin/SideBar";

export function DashBoard() {
  return (
    <>
      <div className=" flex h-screen overflow-hidden">
        <SideBar />

        <div className="relative w-screen flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <AllOrdersTable />
        </div>
      </div>
    </>
  );
}
