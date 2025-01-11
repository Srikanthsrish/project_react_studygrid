import Landing from './Components/Landing/Landing'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/LoginRegister/Login';
import StudentLogin from './Pages/LoginRegister/StudentLogin';
import AdminLogin from './Pages/LoginRegister/AdminLogin';
import AdminRegister from './Pages/LoginRegister/AdminRegister';
import TeacherLogin from './Pages/LoginRegister/TeacherLogin';
import AdminDashboard from './Components/Landing/Dashboard/AdminDashboard';
function App() {
  

  return (
    <>

     
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/studentLogin" element={<StudentLogin/>} />
        <Route path="/adminLogin" element={< AdminLogin/>} />
        <Route path="//adminregister" element={<AdminRegister />} />
        <Route path="/teacherLogin" element={<TeacherLogin/>} />
        <Route path="/adminDashboard" element={<AdminDashboard/>} />
        /adminDashboard
      </Routes>
    
    </>
  )
}

export default App
