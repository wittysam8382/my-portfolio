import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

<<<<<<< HEAD
  height: 400vh;
  position: relative;
  display: flex;
=======
  min-height: 400vh;
  position: relative;
  display: flex;
  flex-direction: column;
>>>>>>> ace8656 (Updated WorkPage layout to vertical scroll and new projects)
  align-items: center;
`;

const Main = styled(motion.ul)`
<<<<<<< HEAD
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
=======
  position: absolute;
  top: 12rem;
  width: 80vw;
  left: calc(10rem + 20vw);
  height: 40vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-left: calc(10rem+20vw);
  color: white;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 1rem;
    width: 90vw;
  }
>>>>>>> ace8656 (Updated WorkPage layout to vertical scroll and new projects)
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
<<<<<<< HEAD
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
=======
  const yinyang = useRef(null);

  useEffect(() => {
   

    const rotate = () => {
      yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)";

>>>>>>> ace8656 (Updated WorkPage layout to vertical scroll and new projects)
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

<<<<<<< HEAD
        <Main ref={ref} variants={container} initial="hidden" animate="show">
=======
        <Main variants={container} initial="hidden" animate="show">
>>>>>>> ace8656 (Updated WorkPage layout to vertical scroll and new projects)
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

<<<<<<< HEAD
        <BigTitlte text="WORK" top="10%" right="20%" />
=======
        <BigTitlte text="PROJECTS" top="10%" right="20%" />
>>>>>>> ace8656 (Updated WorkPage layout to vertical scroll and new projects)
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
