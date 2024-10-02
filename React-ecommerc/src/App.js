import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import Header from './components/Header';
import Orders from './components/Order';
import Login from './components/Login';
import Register from './components/Register'; // استيراد الكومبوننت
import Cookies from 'js-cookie';
import './App.css';

const App = () => {
  const isAuthenticated = !!Cookies.get('sessionToken');

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Products /> : <Navigate to="/login" />} />
        <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/order" element={isAuthenticated ? <Orders /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* إضافة المسار */}
      </Routes>
    </>
  );
};

export default App;





//import React from 'react';
//import { Routes, Route, Navigate } from 'react-router-dom';
//import Products from './components/Products';
//import Cart from './components/Cart';
//import Header from './components/Header';
//import Orders from './components/Order';
//import Login from './components/Login';
//import Cookies from 'js-cookie';
//import './App.css';
//
//const App = () => {
//  const isAuthenticated = !!Cookies.get('sessionToken');
//
//  return (
//    <>
//      <Header />
//      <Routes>
//        <Route path="/" element={isAuthenticated ? <Products /> : <Navigate to="/login" />} />
//        <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/login" />} />
//        <Route path="/order" element={isAuthenticated ? <Orders /> : <Navigate to="/login" />} />
//        <Route path="/login" element={<Login />} />
//      </Routes>
//    </>
//  );
//};
//
//export default App;






//import React from 'react';
//import { Routes, Route } from 'react-router-dom';
//import Products from './components/Products';
//import Cart from './components/Cart';
//import Header from './components/Header';
//import Orders from './components/Order';
//import './App.css';
//
//const App = () => {
//  return (
//    <>
//      <Header />
//      <Routes>
//        <Route path="/" element={<Products />} />
//        <Route path="/cart" element={<Cart />} />
//        <Route path="/order" element={<Orders />} />
//      </Routes>
//    </>
//  );
//};
//
//export default App;
//
//
