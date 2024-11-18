import React from 'react'
import style from "./Services.module.css"
import { PiPaintBrushFill } from "react-icons/pi";
import { IoRocketSharp } from "react-icons/io5";
import { RiGitBranchLine } from "react-icons/ri";
import { CgDebug } from "react-icons/cg";
import Card from '@/app/components/card/card';
import { dancingScript } from '@/app/font';

function Services() {
  return (
    <div className={style.services}>


        <div className={style.topDiv}>
            <h1 style={{ fontFamily: dancingScript.style.fontFamily }}>My Services</h1>
            <p>As a frontend developer, i design and develop responsive, user-friendly <br/>websites enhancing the overall user experience with logical, easy-to-use layouts.</p>
        </div>

        <div className={style.bottomDiv}>


        <Card img={<PiPaintBrushFill  size={80} color="wheat" className={style.icon}/>} title="UI DESIGN" desc="Translating design files (e.g., Figma, Adobe XD, Sketch) into responsive HTML, CSS, and JavaScript."/>

        <Card img={<IoRocketSharp   size={80} color="wheat" className={style.icon}/>} title="OPTIMIZATION" desc="Minify HTML, CSS, and JavaScript, implement lazy loading, and optimize images for faster websites."/>

        <Card img={<RiGitBranchLine   size={80} color="wheat" className={style.icon}/>} title="VERSIONIZING" desc="Using version control systems like Git for tracking changes and collaborating with other developers."/>

        <Card img={<CgDebug   size={80} color="wheat" className={style.icon}/>} title="DEBUGGING" desc=" Writing tests for individual components using frameworks like Jest or React Testing Library."/>






        </div>
    </div>
  )
}

export default Services