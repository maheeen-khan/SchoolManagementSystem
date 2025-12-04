import { Link } from "react-router-dom";
//import { useEffect } from "react";
import { Tooltip, Dropdown } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Sidebar() {
  // // Initialize tooltips
  // useEffect(() => {
  //   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  //   tooltipTriggerList.forEach(el => new Tooltip(el));
  // }, []);

  return (
    <div className="container-fluid" style={{ height: '100vh' }}>
      <div className="row h-100 flex-nowrap">

        {/* Sidebar */}
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex flex-column " >
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white h-100">

            <Link
              to="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">EduSphere</span>
            </Link>

            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

              <li className="nav-item">
                <Link to="/" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house" data-bs-toggle="tooltip" title="Dashboard"></i>
                  <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>

              <li>
                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-speedometer2" data-bs-toggle="tooltip" title="Manage Students"></i>
                  <span className="ms-1 d-none d-sm-inline">Students</span>
                </a>
                <ul className="collapse nav flex-column ms-1" id="submenu1">
                  <li>
                    <Link to="#" className="nav-link px-0">Item 1</Link>
                  </li>
                  <li>
                    <Link to="#" className="nav-link px-0">Item 2</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="#" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-table" data-bs-toggle="tooltip" title="Teachers"></i>
                  <span className="ms-1 d-none d-sm-inline">Teachers</span>
                </Link>
              </li>

              <li>
                <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-bootstrap" data-bs-toggle="tooltip" title="Attendance"></i>
                  <span className="ms-1 d-none d-sm-inline">Attendance</span>
                </a>
                <ul className="collapse nav flex-column ms-1" id="submenu2">
                  <li>
                    <Link to="#" className="nav-link px-0">Students</Link>
                  </li>
                  <li>
                    <Link to="#" className="nav-link px-0">Teachers</Link>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-grid" data-bs-toggle="tooltip" title="Fee"></i>
                  <span className="ms-1 d-none d-sm-inline">Fee</span>
                </a>
                <ul className="collapse nav flex-column ms-1" id="submenu3">
                  <li>
                    <Link to="#" className="nav-link px-0">Item 1</Link>
                  </li>
                  <li>
                    <Link to="#" className="nav-link px-0">Item 2</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="#" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-people" data-bs-toggle="tooltip" title="Certificates"></i>
                  <span className="ms-1 d-none d-sm-inline">Certificate</span>
                </Link>
              </li>

            </ul>

            <hr className="w-100" />

            {/* User Dropdown */}
            {/* <div className="dropdown pb-4 w-100">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="profile"
                  width="30"
                  height="30"
                  className="rounded-circle me-2"
                  data-bs-toggle="tooltip"
                  title="User Profile"
                />
                <span className="d-none d-sm-inline">Admin</span>
              </a>

              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><Link className="dropdown-item" to="#">Settings</Link></li>
                <li><Link className="dropdown-item" to="#">Profile</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#">Sign out</Link></li>
              </ul>
            </div> */}

          </div>
        </div>

        

      </div>
    </div>
  );
}

export default Sidebar;
