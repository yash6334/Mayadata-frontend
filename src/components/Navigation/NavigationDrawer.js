import React from 'react';
import css from "./NavigationDrawer.css";
import menuIcon from "../../assets/icons/menu.png";
import homeIcon from "../../assets/icons/home.png";
import aboutIcon from "../../assets/icons/about.svg";

function NavigationDrawer(props) {
    var one_color;
    var two_color;
    if(props.page == 0){
        one_color = "#133B5C";
        two_color = "#1E5F74";
    }else{
        one_color = "#1E5F74";
        two_color = "#133B5C";
    }

    return (
        <div className="mainDrawer">
            <div className="drawerHeader">
                <img src={menuIcon} className="menuIcon" onClick={()=> props.settoggle(1)}></img>
                <span className="DrawerId">1805314</span>
            </div>
            <div className="drawerButtons">
                <button className="homeButton" onClick={()=> props.setpage(0)} style={{backgroundColor:one_color}}>
                    <img src={homeIcon} className="homeIcon"></img>
                    <span className="homeText">Home</span>
                </button>
                <button className="aboutButton" onClick={()=> props.setpage(1)} style={{backgroundColor:two_color}}>
                    <img src={aboutIcon} className="aboutIcon"></img>
                    <span className="aboutText">About me</span>
                </button>
            </div>
        </div>
    )
}

export default NavigationDrawer
