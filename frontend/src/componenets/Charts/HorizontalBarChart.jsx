import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Maths", value: 70 },
  { name: "English", value: 110 },
  { name: "Chemistry", value: 90 },
  { name: "Physics", value: 30 },
  { name: "Urdu", value: 60 },
  { name: "Islamiat", value: 100 }
];

function HorizontalBarChart() {
  return (
    <section className="py-3">
      <div className="card widget-card border-light shadow-sm">
        <div className="card-body p-4">

          {/* HEADER LIKE THE IMAGE */}
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h5 className="card-title mb-0">Employees By Subjects</h5>

            <button className="btn btn-light border">
              <i className="bi bi-calendar-week me-2"></i>
              This Week
            </button>
          </div>

          {/* CHART */}
          <div style={{ width: "100%", overflowX: "auto" }}>
            <BarChart
              width={800}
              height={260}
              layout="vertical"
              data={data}
              margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={100} />
              <Tooltip />

              {/* orange bars like your screenshot */}
              <Bar dataKey="value" fill="#FF7A00" radius={[5, 5, 5, 5]} />
            </BarChart>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HorizontalBarChart;
