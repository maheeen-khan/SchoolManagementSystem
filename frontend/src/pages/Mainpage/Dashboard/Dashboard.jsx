import React from 'react';
import Cards from '../../../componenets/Cards/Cards';
import student from '../../../assets/students.png';
import teacher from '../../../assets/teacher.png';
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
            <Cards heading="Teachers" value="100" photo={teacher} />
            <Cards heading="Students" value="500" photo={student} />
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
