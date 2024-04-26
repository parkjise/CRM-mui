import React from 'react'
import styled from 'styled-components'

const ComplexTitle = ({title}) => {
  return (
    <Wrapper style={{padding:'2rem'}} className='bg-grey'>
      <h1>{title}</h1>
      <div className='underline'></div>
      <h2 className='title'>random</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background-color:#645cff;
    margin: 0 auto;
  }
  .title {
    color: blue;
  }
`

export default ComplexTitle
