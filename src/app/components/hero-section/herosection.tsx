import React from 'react'
import style from "./Herosection.module.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import { SiToptal } from "react-icons/si";


function Herosection() {
  return (
    <div className={style.hero}>

    <h1>Hey! I'm <span className={style.color} style={{fontWeight:"bold"}}>AQSA SYED</span><br /><span className={style.color}> I</span>&apos;m <span className={style.color}>A F</span>rontend <span className={style.color}>W</span>eb <span className={style.color}>D</span>eveloper.</h1>
    
    
    <p> I’m a digital craftsman turning code into immersive user experiences. <br /> With a keen eye for design and a love for clean, efficient code,<br />  I bridge the gap between functionality and aesthetics.
   </p>
    
    
    <button>Hire Me</button>

    <div className={style.icons}>

    <FaFacebookF color={"#6c584c"}  className={style.size}/>
    <FaInstagramSquare color={"#6c584c"}  className={style.size}/>
    <FaGithub color={"#6c584c"}  className={style.size}/>
    <SiVercel color={"#6c584c"}  className={style.size}/>
    <FaLinkedinIn color={"#6c584c"}  className={style.size}/>
    <FaTwitter color={"#6c584c"}  className={style.size}/>

    </div>
    
    <div className={style.bottomDiv}>


    <SiFiverr  size={130} color="#ADC178"/> 
    <FaUpwork size={80} className={style.mb} color="#ADC178"/>
    <SiFreelancer size={80} className={style.mb} color="#ADC178"/>
    <SiToptal size={80} className={style.mb} color="#ADC178"/>

    
   
    </div>

    </div>
  )
}

export default Herosection