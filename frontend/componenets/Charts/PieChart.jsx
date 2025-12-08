import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const data = [
  { name: "Girls", value: 250 },
  { name: "Boys", value: 300 }
];

const COLORS = ["#ff6b81", "#1e90ff"];

function AttendancePieChart() {
  return (
    <section className="py-3">
      <div className="card widget-card border-light shadow-sm">
        <div className="card-body p-4">
          
          {/* Header row */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="card-title mb-0">Attendance Overview</h5>

            <select className="form-select text-secondary border-light-subtle" style={{ width: "150px" }}>
              <option value="1">This Week</option>
              <option value="2">This Month</option>
              <option value="3">This Year</option>
            </select>
          </div>

          {/* Chart */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <PieChart width={330} height={300}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AttendancePieChart;
