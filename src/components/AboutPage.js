import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
      <ThemeProvider theme={DarkTheme}>
        <Box>
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <PowerButton />
          <ParticleComponent theme="dark" />

          <Spaceman>
            <img src={astronaut} alt="spaceman" />
          </Spaceman>
          <Main>
            I am a skilled programmer proficient in several programming
            languages including C/C++, Python, HTML/CSS, JavaScript and MySQL.
            My technical expertise lies in web development, with a keen eye for
            detail and a passion for creating clean, efficient and effective
            code.
            <br /> <br />
            Outside of my professional pursuits, I enjoy reading books related
            to human psychology and thinking, which has given me valuable
            insights into human behavior and communication. 
            <br /> <br /> I am always seeking new challenges and opportunities
            to grow and develop my skills.
          </Main>

          <BigTitle text="ABOUT" top="10%" left="5%" />
        </Box>
      </ThemeProvider>
    );
}

export default AboutPage
