// TeacherTable.jsx
import React from "react";

function TeacherDataTable({ data }) {
  return (
    <div style={{ padding: "20px", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 10px" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "8px" }}>ID</th>
            <th style={{ textAlign: "left", padding: "8px" }}>Name</th>
            <th style={{ textAlign: "left", padding: "8px" }}>Class Assigned</th>
            <th style={{ textAlign: "left", padding: "8px" }}>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((teacher) => (
            <tr
              key={teacher.id}
              style={{
                boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
                borderRadius: "8px",
                backgroundColor: "white",
                marginBottom: "10px",
                display: "table-row",
              }}
            >
              <td style={{ padding: "12px" }}>{teacher.id}</td>
              <td style={{ padding: "12px" }}>{teacher.name}</td>
              <td style={{ padding: "12px" }}>{teacher.classAssigned}</td>
              <td style={{ padding: "12px" }}>{teacher.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherDataTable;
