import React from 'react'
import phoneImg from "../../../assets/phone-img.png";
import "./Section.scss"

const Section = () => {
    return (
        <div className="container section">
            <div className="section-image">
        <img src={phoneImg} alt="phoone" />
        </div>
        <div className="section-text">
        <h2>Here are our Amazing <span>Features.</span></h2>
            <div className="container-right">
                <h2><span>1. </span>User Friendly</h2>
                <p>ResoPay come up with modern and sleek design and not complicated.</p>
            </div>
            <div className="container-right">
                <h2><span>2. </span>Data Secured</h2>
                <p>All your shared data is secured properly in our system and it's encrypted.</p>
            </div>
            <div className="container-right">
                <h2><span>3. </span>Locked Savings</h2>
                <p>You can lock up your saving preference to improve on your saving dedication.</p>
            </div>
        </div>
        
    </div>
    )
}

export default Section