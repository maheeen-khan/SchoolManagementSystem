import React from 'react'
import Cards from '../../componenets/Cards/Cards'
import AddStudent from '../../assets/AddStudent.png'
import DeleteStudent from '../../assets/DeleteStudent.png'
import UpdateStudent from '../../assets/UpdateStudent.png'
import StudentDataTable from '../../componenets/Table/StudentDataTable/StudentDataTable'

const students = [
  { rollNo: 1, className: "10-A", name: "Ali", feesStatus: "Paid" },
  { rollNo: 2, className: "10-B", name: "Sara", feesStatus: "Pending" },
  { rollNo: 3, className: "9-C", name: "Ahmed", feesStatus: "Paid" },
];

function Student() {
  return (
    <div>
      <h1 className='main-title'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-person-arms-up" viewBox="0 0 16 16">
        <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
        <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
        </svg>
        Student</h1>
      <div className="cards">
         <Cards heading="Add Student" value="" photo={AddStudent} colour="#38abb869"/>
         <Cards heading="Delete Student" value="" photo={DeleteStudent} colour="#38abb869"/>
         <Cards heading="Update Student Data" value ="" photo={UpdateStudent} colour="#38abb869"/>
      </div>
      <h1 className='main-title' style={{paddingTop:"50px"}}>Students Data</h1>
      <StudentDataTable data={students} />
    </div>
  )
}

export default Student
