import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const revenueData = [
  { name: "Fees Collected", amount: 6000 },
  { name: "Pending", amount: 2000 },
  { name: "Expenses", amount: 3500 }
];

function VerticalBarChart() {
  return (
    <section className="py-3">
      <div className="card widget-card border-light shadow-sm">
        <div className="card-body p-4">

          {/* Title */}
          <h5 className="card-title mb-3">Revenue Stats</h5>

          {/* Chart */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <BarChart
              width={400}
              height={300}
              data={revenueData}
              margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#38abb8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </div>

        </div>
      </div>
    </section>
  );
}

export default VerticalBarChart;
