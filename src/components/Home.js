import React from "react";
import img from  '../Images/img1.svg'
import {NavLink} from 'react-router-dom'
function Home() {
  return (
    <header>
  <div className="smoothie">
    <img src={img} alt=""/>
  </div>
  <div className="headings">
    <h2>Serve Humanity</h2>
    <h3>Service to others is the rent you pay for your room here on earth.</h3>
    <NavLink to="/login" className="btn">Donate</NavLink>
  </div>
</header>
  );
}

export default Home;
