import { NavLink } from 'react-router-dom';
import React from 'react';
import Cookies from 'js-cookie';
import './Header.css';

const Header = () => {
  const username = Cookies.get('username');

  const handleLogout = () => {
    Cookies.remove('sessionToken');
    Cookies.remove('username');
    window.location.reload();
  };

  return (
    <header className="header text-white p-1">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand fs-3" to="/">My E-Commerce</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link btn btn-outline-light me-2 fs-5" to="/">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-outline-light me-2 fs-5" to="/cart">Cart</NavLink>
              </li>
              <li className="nav-item">
                {username ? (
                  <div className="nav-link fs-5">Welcome, {username}</div>
                ) : (
                  <NavLink className="nav-link btn btn-outline-light me-2 fs-5" to="/login">Login</NavLink>
                )}
              </li>
              {username && (
                <li className="nav-item">
                  <button className="btn btn-outline-light me-2 fs-5" onClick={handleLogout}>Logout</button>
                </li>
              )}
              <li className="nav-item">
                <NavLink className="nav-link btn btn-outline-light fs-5" to="/register">Register</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;





//// Header.js
//import { NavLink } from 'react-router-dom';
//import React from 'react';
//import Cookies from 'js-cookie';
//import './Header.css';
//
//const Header = () => {
//  const username = Cookies.get('username'); // افترض أنك ستخزن اسم المستخدم عند تسجيل الدخول
//
//  const handleLogout = () => {
//    Cookies.remove('sessionToken'); // إزالة الجلسة عند تسجيل الخروج
//    Cookies.remove('username'); // إزالة اسم المستخدم
//    window.location.reload(); // تحديث الصفحة
//  };
//
//  return (
//    <header className="text-white p-1">
//      <nav className="navbar navbar-expand-lg">
//        <div className="container-fluid">
//          <NavLink className="navbar-brand fs-3" to="/">My E-Commerce</NavLink>
//          <div className="collapse navbar-collapse">
//            <ul className="navbar-nav">
//              <li className="nav-item">
//                <NavLink className="nav-link btn btn-outline-light me-2 fs-5" to="/">Products</NavLink>
//              </li>
//              <li className="nav-item">
//                <NavLink className="nav-link btn btn-outline-light me-2 fs-5" to="/cart">Cart</NavLink>
//              </li>
//              <li className="nav-item">
//                {username ? (
//                  <div className="nav-link fs-5">Welcome, {username}</div>
//                ) : (
//                  <NavLink className="nav-link btn btn-outline-light me-2 fs-5" to="/login">Login</NavLink>
//                )}
//              </li>
//              {username && (
//                <li className="nav-item">
//                  <button className="btn btn-outline-light me-2 fs-5" onClick={handleLogout}>Logout</button>
//                </li>
//              )}
//              <li className="nav-item">
//                <NavLink className="nav-link btn btn-outline-light fs-5" to="/register">Register</NavLink>
//              </li>
//            </ul>
//          </div>
//        </div>
//      </nav>
//    </header>
//  );
//};
//
//export default Header;






//import { NavLink } from 'react-router-dom';
//import React from 'react';
//import './Header.css';
//
//const Header = () => {
//  return (
//    <header className="text-white p-1">
//      <nav className="navbar navbar-expand-lg">
//        <div className="container-fluid">
//          <NavLink className="navbar-brand fs-3" to="/">My E-Commerce</NavLink>
//          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//            <span className="navbar-toggler-icon"></span>
//          </button>
//          <div className="collapse navbar-collapse" id="navbarNav">
//            <ul className="navbar-nav">
//              <li className="nav-item">
//                <NavLink className={({ isActive }) => `nav-link btn btn-outline-light me-2 fs-5 ${isActive ? 'active' : ''}`} to="/">Products</NavLink>
//              </li>
//              <li className="nav-item">
//                <NavLink className={({ isActive }) => `nav-link btn btn-outline-light me-2 fs-5 ${isActive ? 'active' : ''}`} to="/cart">Cart-Shoping</NavLink>
//              </li>
//              <li className="nav-item">
//                <NavLink className={({ isActive }) => `nav-link btn btn-outline-light fs-5 ${isActive ? 'active' : ''}`} to="/order">Order</NavLink>
//              </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link btn btn-outline-light me-2 fs-5" to="/login">Login</NavLink>
//               </li>
//               <li className="nav-item">
//                  <NavLink className="nav-link btn btn-outline-light me-2 fs-5" to="/register">Register</NavLink>
//                </li>
//            </ul>
//          </div>
//        </div>
//      </nav>
//    </header>
//  );
//};
//
//export default Header;
