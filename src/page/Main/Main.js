import React from 'react';
import './Main.css';  // Optional: include if you have specific styles for this component
import Content from '../../component/Content/Content';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
function Main() {
  return (
    <main>
      <Navbar/>
      <Content title={"Main Page"}/>
      <Footer/>
    </main>
  );
}

export default Main;