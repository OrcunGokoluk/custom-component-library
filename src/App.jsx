import React from 'react'
import './CSS/App.css'
import ShowcaseWrapper from './components/wrapper/ShowcaseWrapper'
import Badge from './components/badge/Badge'
import HorizontalShowcaseSection from './components/wrapper/HorizontalShowcaseSection'
import Tooltip from './components/tooltip/Tooltip'
import VerticalShowcaseSection from './components/wrapper/VerticalShowcaseSection'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

function App() {

  const [isVisible, setIsVisible] = React.useState(true);

  function handleReset() {
    setIsVisible(prev=>prev+1); // Reset butonuna basınca tooltip'leri aç
  }

  return (
    <>
    <main>
      {/* Badges */}
      <ShowcaseWrapper>
        <HorizontalShowcaseSection>
          <Badge text="Badge"/>
          <Badge color="red" text="Badge"/>
          <Badge color="green"text="Badge"/>
          <Badge color="blue"text="Badge"/>
          <Badge color="indigo"text="Badge"/>
          <Badge color="purple"text="Badge"/>
          <Badge color="pink"text="Badge"/>
          <Badge color="yellow"text="Badge"/>
        </HorizontalShowcaseSection>
        <HorizontalShowcaseSection>
          <Badge text="Badge" border={false}/>
          <Badge color="red" text="Badge"border={false}/>
          <Badge color="green"text="Badge"border={false}/>
          <Badge color="blue"text="Badge"border={false}/>
          <Badge color="indigo"text="Badge"border={false}/>
          <Badge color="purple"text="Badge"border={false}/>
          <Badge color="pink"text="Badge"border={false}/>
          <Badge color="yellow"text="Badge"border={false}/>
        </HorizontalShowcaseSection>
      </ShowcaseWrapper>
      {/* Badges */}


      {/* Tooltip */}
      <ShowcaseWrapper>
        <button onClick={handleReset} className='visibility-reset-button'>RESET</button>
        <HorizontalShowcaseSection>
          <VerticalShowcaseSection>
            <Tooltip icon={<FaReact/>} visible={isVisible} />
            <Tooltip color="red" icon={<FaGithub/>} visible={isVisible}/>
            <Tooltip color="green" icon={<IoLogoJavascript/>} visible={isVisible}/>
            <Tooltip color="blue" icon={<BiLogoMongodb/>} visible={isVisible}/>
            <Tooltip color="indigo" icon={<SiTypescript/>} visible={isVisible}/>
            <Tooltip color="purple" icon={<SiAngular/>} visible={isVisible}/>
            <Tooltip color="pink" icon={<FaGitlab/>} visible={isVisible}/>
            <Tooltip color="yellow" icon={<FaStar/>} visible={isVisible}/>
          </VerticalShowcaseSection>
          <VerticalShowcaseSection>
            <Tooltip visible={isVisible}/>
            <Tooltip color="red" visible={isVisible}/>
            <Tooltip color="green" visible={isVisible}/>
            <Tooltip color="blue" visible={isVisible}/>
            <Tooltip color="indigo" visible={isVisible}/>
            <Tooltip color="purple" visible={isVisible}/>
            <Tooltip color="pink" visible={isVisible}/>
            <Tooltip color="yellow" visible={isVisible}/>
          </VerticalShowcaseSection>          
        </HorizontalShowcaseSection>
      </ShowcaseWrapper>
      {/* Tooltip */}
    </main>
    </>
  )
}

export default App
