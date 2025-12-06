import React from 'react';
import Cards from '../../../componenets/Cards/Cards';
import student from '../../../assets/students.png';
import teacher from '../../../assets/teacher.png';
import BarChart from '../../../componenets/Charts/BarChart';
import PieChart from '../../../componenets/Charts/PieChart';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dash-container">

      <h1 className="dash-title">
        <i className="fs-2 bi-house dash-icon"></i>
        Dashboard
      </h1>

      <div className="dash-layout">

        {/* LEFT COLUMN */}
        <div className="dash-left">

          {/* Cards */}
          <div className="dash-cards">
            <Cards heading="Teachers" value="100" photo={teacher}/>
            <Cards heading="Students" value="500" photo={student}/>
          </div>

          {/* Bar Chart */}
          <div className="dash-box">
            <BarChart />
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="dash-box dash-right">
          <PieChart />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
