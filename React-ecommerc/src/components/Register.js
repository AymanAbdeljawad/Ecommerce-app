// Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Register.css'; // قم بإنشاء ملف CSS لتصميم الصفحة

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && password && password === confirmPassword) {
      // هنا يمكنك إضافة عملية التسجيل، مثل الاتصال بـ API
      // بعد نجاح التسجيل، يمكنك تخزين معلومات الجلسة
      Cookies.set('sessionToken', 'your-session-token', { expires: 7 });
      navigate('/'); // توجيه المستخدم إلى الصفحة الرئيسية
    } else {
      alert('Please enter valid credentials and ensure passwords match.');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
