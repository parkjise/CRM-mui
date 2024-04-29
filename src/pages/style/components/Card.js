import React from 'react'
import styled from 'styled-components'
const Card = () => {
  return (
    <StyledCard>
      <img src="https://images.unsplash.com/photo-1713868779710-a3891cdef3a2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
      <footer>
        <h4>Product Name</h4>
        <p>$15</p>
      </footer>
    </StyledCard>
  )
}

const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background-color: var(--white);
  border-radius: 0%.25rem;
  img {
    width: 100%;
    border-top-left-radius:0.25rem ;
    border-top-right-radius:0.25rem ;
  }
`
export default Card
