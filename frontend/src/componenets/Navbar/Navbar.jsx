import React from 'react'
import Logo2 from '../../assets/Logo.png'
import '../../index.css'
function Navbar({head}) {
  return (
    <nav className="navbar navbar-expand-lg  " style={{ backgroundColor: "#8fdfc288" ,
        boxShadow: "0 4px 6px rgba(0,0,0,0.2)" }}>
      <div className="container-fluid">
        
        <button
        className="btn btn-light w-10 m-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-controls="offcanvasSidebar"
      >
        <i className="bi bi-list"></i>
      </button>

      {head ? <h3 className="ms-3 mt-2">{head}</h3> : <img src={Logo2} alt="Logo" style={{ height: '40px', marginLeft: '10px' }} />}

          <form className="d-flex ms-auto" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn submit" type="submit">Search</button>
          </form>
        </div>
      
    </nav>
  )
}

export default Navbar