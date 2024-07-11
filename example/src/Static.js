import React, { useEffect, useState } from 'react';
import CustomNavbar from './Navbar';
import './App.css';
import C from './C';
import WhomWeServe from './WhomWeServe';
import CropYieldPredictor from './CropYieldPredictor';


function Static() {
  return (
    <div>
  <div className="hero-section">
      <CustomNavbar  className="navbar"/>
      <C/>
      </div>
    <WhomWeServe style={{ paddingBottom: '40px' }} /> 
    <CropYieldPredictor/> 
</div>
  );
}

export default Static;
