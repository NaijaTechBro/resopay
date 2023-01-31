import imag from "../../svgs/circle.svg";
import eye from "../../svgs/circle.svg";

let Arr = [
    {
        link: "/dashboard/savings/target/*", 
        navimg: eye, img :imag,
        svg: 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="target" 
        style={{color: "rgb(39, 174, 96)"}}>
            <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
        </svg>,
        title:"Targets", name: "Targets",
        desc: "Reach your unique individual saving goal. 10% more or less p.a",
        amt: "N0.00",
        color: "rgb(39,174,96)",
        border: "5px solid rgb(39,174,96)",
        bg: "rgb(220,255,235)"
    }
]

export default Arr;