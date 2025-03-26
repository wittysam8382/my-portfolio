import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 85vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
      <ThemeProvider theme={lightTheme}>
        <Box>
          <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton />
          <ParticleComponent theme="light" />
          <Main>
            <Title>
              <Develope width={40} height={40} /> Technical
            </Title>
<<<<<<< HEAD
            <Description>
=======
            <Description color='red' highlight="yellow">
>>>>>>> ace8656 (Updated WorkPage layout to vertical scroll and new projects)
              I love to create design which speaks, Keep it clean, minimal and
              simple.
            </Description>
            <Description>
              <strong>I love Problem Solving and development</strong>
              <ul>
                <li>Programming Languages: C++, JavaScript, Python</li>
                <li>Database and Query Language: SQL, MongoDB</li>
                <li>
<<<<<<< HEAD
                  Frameworks and Libraries: React.js, Express.js, Node.js,
=======
                  Frameworks and Libraries: React.js, Express.js, Node.js, DJango,
>>>>>>> ace8656 (Updated WorkPage layout to vertical scroll and new projects)
                  Bootstrap
                </li>
                <li>
                  Version Control Tools and IDEs: Git, GitHub, Visual Studio
                  Code
                </li>
                <li>Computer Fundamentals: DBMS, OOPs, OS, DSA.</li>
              </ul>
            </Description>
          </Main>
          <Main>
            <Title>
              <Design width={40} height={40} /> Soft Skills
            </Title>
            <Description>
              I value business or brand for which i'm creating, thus i enjoy
              bringing new ideas to life.
            </Description>
            <Description>
              <ul>
                <li>Collaboration</li>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Planning</li>
                <li>Leadership</li>
              </ul>
            </Description>
          </Main>

          <BigTitle text="SKILLS" top="80%" right="30%" />
        </Box>
      </ThemeProvider>
    );
}

export default MySkillsPage
