import { Outlet } from "react-router-dom";

import NavbarDasboard from "./NavbarDashboard";
import SideBar from "./SideBar";

const DashboardMainLayout = () => {
  return (
    <div className="font-montserrat">
      <NavbarDasboard />
      <div className="max-md:hidden ">
        <SideBar />
      </div>
      <div className="pt-24 xl:pt-36  md:ml-44 md:mr-4 lg:ml-52 lg:mr-6 xl:ml-72 xl:mr-8 ">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardMainLayout;
