import { UserOrderTable } from "../../components/user/UserOrderTable";
import { UserSideBar } from "../../components/user/UserSideBar";

export default function UserDashBoard() {
  return (
    <div>

      <div className=" flex gap-10 h-screen overflow-hidden bg-slate-100">
        <UserSideBar />
        <div className=" flex justify-center items-center">
          <UserOrderTable />
        </div>

      </div>

    </div>
  );
}
