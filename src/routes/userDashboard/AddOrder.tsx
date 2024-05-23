import { UserAddOrder } from "../../components/user/UserAddOrder";
import { UserSideBar } from "../../components/user/UserSideBar";

export default function AddOrder() {
  return (
    <>
      <div className=" flex h-screen overflow-hidden">
        <UserSideBar />

        <div className=" w-screen flex justify-center align-middle ">
          <UserAddOrder />
        </div>
      </div>
    </>
  );
}
