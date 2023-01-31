import React, { useState, useEffect } from 'react';
import "./savings.css";
import { Routes, Route, Link } from 'react-router-dom';
import SavingsHome from "./savingshome/savingshome";
import Target from './targets/target';

const Savings = () => {


    return ( 
        <div className='savings'>
            <Routes>
                <Route path="/*" element={<SavingsHome />}/>
                <Route path="/target/*" element={<Target />} />
            </Routes>
            
        </div>
    )
}

export default Savings;