import React from 'react';

function Cards({ heading, value, photo }) {
  return (
    <div 
      className="card"
      style={{
        width: "100%",
        maxWidth: "250px",
        backgroundColor: "#e1e29aff",
        borderRadius: "10px",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      
      {/* Image controlled size */}
      <img
        src={photo}
        alt={heading}
        style={{
          width: "90px",
          height: "90px",
          objectFit: "contain",
          marginBottom: "10px"
        }}
      />

      <div className="card-body" style={{ padding: 0 }}>
        <h5 className="card-title" style={{ marginBottom: "5px" }}>
          {heading}
        </h5>

        <p className="card-text" style={{ fontSize: "20px", fontWeight: "bold" }}>
          {value}
        </p>
      </div>

    </div>
  );
}

export default Cards;
