import React from 'react'
import Cards from '../../componenets/Cards/Cards'
import UpdateTeacher from '../../assets/UpdateTeacher.png'
import TeacherDataTable from '../../componenets/Table/TeacherDataTable/TeachersDataTble';

const teachers = [
  { id: 1, name: "Mrs. Khan", classAssigned: "10-A", attendance: "Present" },
  { id: 2, name: "Mr. Ali", classAssigned: "10-B", attendance: "Absent" },
  { id: 3, name: "Ms. Sara", classAssigned: "9-C", attendance: "Present" },
];

function Teacher() {
  return (
    <div>
      <h1 className='main-title'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-person-circle" viewBox="0 0 16 16" >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
        </svg>Teacher Data</h1>
      <div className='cards'>
         <Cards heading="Add Teacher" value="" photo={UpdateTeacher} colour="#38abb869" />
         <Cards heading="Delete Teacher " value="" photo={UpdateTeacher} colour="#38abb869"/>
         <Cards heading="Update Teacher Data" value ="" photo={UpdateTeacher} colour="#38abb869"/>
      </div>
      <h1 className='main-title' style={{paddingTop:"50px"}}>Teachers Data</h1>
      <TeacherDataTable data={teachers} />
    </div>
  )
}

export default Teacher
