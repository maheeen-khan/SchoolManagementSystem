import React from 'react';
import Cards from '../../../componenets/Cards/Cards';
import student from '../../../assets/students.png';
import teacher from '../../../assets/teacher.png';
import attenOverview from '../../../assets/atten.png';
import BarChart from '../../../componenets/Charts/BarChart';
import PieChart from '../../../componenets/Charts/PieChart';
import './Dashboard.css'; // your CSS

function Dashboard() {
  return (
    <div className="dash-container">

      <h1 className="main-title">
        <i className="fs-2 bi-house dash-icon"></i>
        Dashboard
      </h1>

      <div className="dash-layout">

        {/* LEFT COLUMN */}
        <div className="dash-left">
          <div className="dash-cards">
            <Cards heading="Attendance Overview" value="540" photo={attenOverview} colour={"#1AB69D"} />
            <Cards heading="Total No of Students" value="500" photo={student} colour={"#ADA729"} />
            <Cards heading="Total No of Teachers" value="100" photo={teacher} colour={"#1AB69D"} />
            <Cards heading="Earnings" value="$6000" photo={student} colour={"#ADA729"} />
            
          </div>

          <div className="dash-box">
            <BarChart />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="dash-right dash-box">
          <PieChart />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
