import React from 'react'
import StudentDataTable from '../../componenets/Table/StudentDataTable/StudentDataTable'
import VerticalBarChart from '../../componenets/Charts/VerticalBarChart'
const students = [
  { rollNo: 1, className: "10-A", name: "Ali", feesStatus: "Paid" },
  { rollNo: 2, className: "10-B", name: "Sara", feesStatus: "Pending" },
  { rollNo: 3, className: "9-C", name: "Ahmed", feesStatus: "Paid" },
];

const Fee = () => {
  return (
    <div>
      <h1 className='main-title'><i className="bi bi-receipt me-2"></i>Fees Overview</h1>
      <VerticalBarChart/>
    
      <h1 className='main-title'>Student Fees Status </h1>
      <StudentDataTable data={students}/>
    </div>
  )
}

export default Fee
