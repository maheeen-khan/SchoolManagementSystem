import './App.css'
import StudentAttendance from './pages/Attendance/StudentAttendance/StudentAttendance';
import TeacherAttendance from './pages/Attendance/TeacherAttendance/TeacherAttendance';
import Certificate from './pages/Certificate/Certificate';
import Fee from './pages/Fee/Fee';
import Dashboard from './pages/Mainpage/Dashboard/Dashboard'
import Student from './pages/Student/Student';
import Teacher from './pages/Teacher/Teacher';
import AppRoute from './routes/AppRoute';
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AppRoute/>}>
             <Route index element={<Dashboard />} />  //Mainpage
             <Route path="Students" element={<Student/>}/> 
             <Route path="Teachers" element={<Teacher/>}/>
             <Route path="Teachers_Attendance" element={<TeacherAttendance/>}/>
             <Route path="Students_Attendance" element={<StudentAttendance/>}/>
             <Route path="Fee" element={<Fee/>}/>
             <Route path="Certificate" element={<Certificate/>}/>
             
        </Route>
          
      </Routes>
    </>
  )
}

export default App
