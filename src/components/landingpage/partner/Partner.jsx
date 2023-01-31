import React from 'react'
import phoneImg from "../../../assets/phone-img.png";
import "./Partner.scss"

const Partner = () => {
    return (
        <div className="container partner">
            <div className='partner-text'>
            <h2>Our <span>Trusted</span> Partner</h2>
            <p>Here are our partners and service providers who have made this possible.</p>
        </div>
            <div className='partner-image'>
                <img src={phoneImg} alt="op" />
                <img src={phoneImg} alt="op" />
                <img src={phoneImg} alt="op" />
                <img src={phoneImg} alt="op" />
                <img src={phoneImg} alt="op" />
                <img src={phoneImg} alt="op" />
                <img src={phoneImg} alt="op" />
                <img src={phoneImg} alt="op" />
            </div>
        
    </div>
    )
}

export default Partner;