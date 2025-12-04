import './App.css'
import Dashboard from './pages/Mainpage/Dashboard/Dashboard'
import Student from './pages/Student/Student';
import AppRoute from './routes/AppRoute';
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AppRoute/>}>
             <Route index element={<Dashboard />} />  //Mainpage
             <Route path="students" element={<Student/>}/> 
        </Route>
          
      </Routes>
    </>
  )
}

export default App
