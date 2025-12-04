import { Outlet } from "react-router-dom";
import Navbar from "../componenets/Navbar/Navbar";

import Sidebar from "../componenets/Sidebar/Sidebar";  

function AppRoute() {
  return (
    <div className="layout">

      <Navbar />
      <Sidebar />   
      <Outlet />   
      

    </div>
  );
}

export default AppRoute;
