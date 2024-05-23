import { SideBar } from "../../components/Admin/SideBar";

export default function UserDashborad() {
  return (
    <>
      <div className=" flex h-screen overflow-hidden">
        <SideBar />

        <div className=" w-screen flex justify-center align-middle "></div>
      </div>
    </>
  );
}
