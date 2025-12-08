// StudentTable.jsx
import React from "react";

function StudentDataTable({ data }) {
  return (
    <div style={{ padding: "20px", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 10px" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "8px" }}>Roll No</th>
            <th style={{ textAlign: "left", padding: "8px" }}>Name</th>
            <th style={{ textAlign: "left", padding: "8px" }}>Class</th>
            <th style={{ textAlign: "left", padding: "8px" }}>Fees Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr
              key={student.rollNo}
              style={{
                boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
                borderRadius: "8px",
                backgroundColor: "white",
                marginBottom: "10px",
                display: "table-row",
              }}
            >
              <td style={{ padding: "12px" }}>{student.rollNo}</td>
              <td style={{ padding: "12px" }}>{student.name}</td>
              <td style={{ padding: "12px" }}>{student.className}</td>
              <td style={{ padding: "12px" }}>{student.feesStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentDataTable;
