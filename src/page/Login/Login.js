import React from 'react';
import './Login.css';  // Optional: include if you have specific styles for this component
import Content from '../../component/Content/Content';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
function Login() {
  return (
    <main>
      <Navbar/>
      <Content title={"Login Page"}/>
      <Footer/>
    </main>
  );
}

export default Login;