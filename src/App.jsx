import React from 'react'
import './CSS/App.css'
import ShowcaseWrapper from './components/wrapper/ShowcaseWrapper'
import Badge from './components/badge/Badge'
import HorizontalShowcaseSection from './components/wrapper/HorizontalShowcaseSection'
import Tooltip from './components/tooltip/Tooltip'

function App() {


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
        <Tooltip/>
        <Tooltip color="red"/>
        <Tooltip color="green"/>
        <Tooltip color="blue"/>
        <Tooltip color="indigo"/>
        <Tooltip color="purple"/>
        <Tooltip color="pink"/>
        <Tooltip color="yellow"/>
      </ShowcaseWrapper>
      {/* Tooltip */}
    </main>
    </>
  )
}

export default App
