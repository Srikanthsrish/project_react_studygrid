import React from 'react';
import { FaGraduationCap,FaChalkboardTeacher, FaUserShield } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = (role) => {
    navigate(`/${role}Login`);  // Navigate based on the role
  };

  return (
    <div className="login-container">
      {/* Admin Login Button */}
      <button className="button-with-content" onClick={() => handleLoginClick('admin')}>
        < FaUserShield size={50}/>
        <h2 className="button-heading">Admin</h2>
        <p className="button-description">Login as an administrator to access the</p>
        <p className="button-description"> dashboard to manage app data.</p>
      </button>

      {/* Student Login Button */}
      <button className="button-with-content" onClick={() => handleLoginClick('student')}>
      <FaGraduationCap size={50} />
        <h2 className="button-heading">Student</h2>
        <p className="button-description">Login as a student to explore course materials and assignments.</p>
        <p className="button-description"> materials and assignments.</p>
      </button>

      {/* Teacher Login Button */}
      <button className="button-with-content" onClick={() => handleLoginClick('teacher')}>
      <FaChalkboardTeacher size={50} color="light-blue" />
        <h2 className="button-heading">Teacher</h2>
        <p className="button-description">Login as a teacher to create courses,</p>
        <p className="button-description">assignments, and track student progress.</p>
      </button>
    </div>
  );
};

export default Login;



