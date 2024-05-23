import { UserOrderTable } from "../../components/user/UserOrderTable";
import { UserSideBar } from "../../components/user/UserSideBar";

export default function UserEcommerce() {
  return (
    <>
      <div className=" flex h-screen overflow-hidden">
        <UserSideBar />

        <div className=" w-screen flex justify-center align-middle ">
          <UserOrderTable />
        </div>
      </div>
    </>
  );
}
