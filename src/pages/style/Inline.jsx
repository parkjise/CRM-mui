import React from 'react'
import styled from 'styled-components'
import BasicTitle from './components/BasicTitle'
import { DefaultButton } from './components/Buttons'

const Inline = () => {
  return (
    <>
      <h2>Styled components</h2>
      <div style={{padding:'2rem',backgroundColor:'white'}}>
        <h1 className="title">Style</h1>
        <button className="btn">Click me</button>
      </div>
      <BasicTitle special>Styled Components</BasicTitle>
      <DefaultButton>Button</DefaultButton>
    </>
  )
}

export default Inline