import React from 'react'
import './CSS/App.css'
import ShowcaseWrapper from './components/wrapper/ShowcaseWrapper'
import Badge from './components/badge/Badge'
import ShowcaseSection from './components/wrapper/ShowcaseSection'

function App() {


  return (
    <>
    <main>
      {/* Badges */}
      <ShowcaseWrapper>
        <ShowcaseSection>
          <Badge text="Badge"/>
          <Badge color="red" text="Badge"/>
          <Badge color="yellow"text="Badge"/>
          <Badge color="green"text="Badge"/>
          <Badge color="blue"text="Badge"/>
          <Badge color="indigo"text="Badge"/>
          <Badge color="purple"text="Badge"/>
          <Badge color="pink"text="Badge"/>
        </ShowcaseSection>
        <ShowcaseSection>
          <Badge text="Badge" border={false}/>
          <Badge color="red" text="Badge"border={false}/>
          <Badge color="yellow"text="Badge"border={false}/>
          <Badge color="green"text="Badge"border={false}/>
          <Badge color="blue"text="Badge"border={false}/>
          <Badge color="indigo"text="Badge"border={false}/>
          <Badge color="purple"text="Badge"border={false}/>
          <Badge color="pink"text="Badge"border={false}/>
        </ShowcaseSection>
      </ShowcaseWrapper>
      {/* Badges */}
    </main>
    </>
  )
}

export default App
