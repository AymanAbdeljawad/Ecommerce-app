// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      // تخزين معلومات الجلسة واسم المستخدم
      Cookies.set('sessionToken', 'your-session-token', { expires: 7 });
      Cookies.set('username', username, { expires: 7 }); // تخزين اسم المستخدم
      navigate('/'); // توجيه المستخدم إلى الصفحة الرئيسية
    } else {
      alert('Please enter valid credentials.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;






//// Login.js
//import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
//import Cookies from 'js-cookie';
//
//const Login = () => {
//  const [username, setUsername] = useState('');
//  const [password, setPassword] = useState('');
//  const navigate = useNavigate();
//
//  const handleLogin = () => {
//    // هنا يمكنك إضافة عملية التحقق من المستخدم
//    // مثلاً، تحقق من username و password هنا
//    if (username && password) {
//      // تخزين معلومات الجلسة
//      Cookies.set('sessionToken', 'your-session-token', { expires: 7 });
//      navigate('/'); // توجيه المستخدم إلى الصفحة الرئيسية
//    } else {
//      alert('Please enter valid credentials.');
//    }
//  };
//
//  return (
//    <div className="login-container">
//      <h2>Login</h2>
//      <input
//        type="text"
//        placeholder="Username"
//        value={username}
//        onChange={(e) => setUsername(e.target.value)}
//      />
//      <input
//        type="password"
//        placeholder="Password"
//        value={password}
//        onChange={(e) => setPassword(e.target.value)}
//      />
//      <button onClick={handleLogin}>Login</button>
//    </div>
//  );
//};
//
//export default Login;
