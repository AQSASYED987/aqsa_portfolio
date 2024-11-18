import React from 'react'
import style from "./About.module.css";
import Image from 'next/image';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiShadcnui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { dancingScript } from "@/app/font"

function About() {
  return (
    <div>
      <div className={style.about}>
        <div className={style.textDiv}>
          <h1 style={{ fontFamily: dancingScript.style.fontFamily }}>AQSA SYED</h1>
          <p>Frontend Developer</p>

          <p className={style.font}>
         I am an enthusiastic and motivated undergraduate student. Seeking my strong academic foundation andpassion
          for web development and computer earning to contribute to a dynamic and innovative team.
          </p>

          <button>Contact Me</button>
        </div>
        <div className={style.imageDiv}>
          <Image
            src="/public/img.png.png"
            alt="Image"
            width={100}
            height={400}
            className={style.img}
          ></Image>
        </div>
      </div>

      <div className={style.bottomDiv}>
        <FaHtml5 size={80} color="#ADC178" />
        <FaCss3Alt size={80} color="#ADC178" />
        <RiNextjsFill size={80} color="#ADC178" />
        <RiTailwindCssFill size={80} color="#ADC178" />
        <IoLogoJavascript size={80} color="#ADC178" />
        <BiLogoTypescript size={80} color="#ADC178" />
        <SiShadcnui size={80} color="#ADC178" />
        <FaBootstrap size={80} color="#ADC178" />
      </div>
    </div>
  );

}

export default About