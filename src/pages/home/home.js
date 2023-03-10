import React from "react";
import "./home.css";
import avatar from "../../svgs/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import Activities from "../../components/Activities/Activities";
import Arr from "./homeData";
import { useSelector } from "react-redux"

const Home = () => {

    let display;
    const hr = new Date().getHours();
    if(hr < 12) display = "It's A New Day Enjoy"
    else if(hr < 18) display = "Wash Your Hands It's Lunch Time";
    else display = "Have Your Dinner It's BedTime";

    const account = useSelector((state) => state.account);
    const navigate = useNavigate();

    let trillion = 1000000000000, billion = 1000000000, million=1000000, thousand=1000;

    const quantity = (val) => {
        if(val >= trillion) return Math.floor(val/trillion) + "T"+(val>trillion ? "+" : "");
        else if(val >= billion) return Math.floor(val/billion) + "B"+(val>billion ? "+" : "");
        else if(val >= million) return Math.floor(val/million) + "M"+(val>million ? "+" : "");
        else if(val >= thousand) return Math.floor(val/thousand) + "K"+(val>thousand ? "+" : "");
        else return val + ".00";
    }

    const printAmt = (id) => {
        if(id==0) return account.amt ? quantity(account.amt) : "0.00";
        else if(id == 1) return "0.00";
        else return account.flexnaira_amt ? quantity(account.flexnaira_amt) : "0.00";
    }

    const handleNavigate = () => {
        navigate("/dashboard/account/*");
    }


    return (
        <div className="home_container">
            <div className="home_content">
                <div className="home_header">
                    <div className="home_header_left">
                        <h1>{account.first_name}</h1>
                        <span>{display}</span>
                    </div>
                    <img src={account.profile_picture || avatar} onClick={handleNavigate} />
                </div>
                <div className="home_body">
                    <ul className="scroll-x">
                        {Arr.map((val, idx) => (
                            <li className="scroll-x-list" key={idx}>
                                <Link to={val.link} className="scroll-x-link" style={{backgroundColor: val.bg, textDecoration: "none"}}>
                                    {/* <img src={val.img} /> */}
                                    {val.svg}
                                    <div className="scroll_text">
                                        <span>{val.title}</span>
                                        <h1>&#8358;{printAmt(idx)}</h1>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="home_main">
                    <Activities type={"home"} /> 
                </div>
                <Link to="activities" className="bottom" style={{textDecoration: "none"}}>View more activities</Link>
            </div>
        </div>
    )
}

export default Home;