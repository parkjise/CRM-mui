import React from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core'

const StyledBtn = styled(Button)`
  text-transform: capitalize;
  border-radius: 5rem;
  font-size:2rem;
  width: 500px;
  height: 80px;
`

const Material = () => {
  return (
    <>
      <div style={{padding:'2rem'}}>
        <Button color='primary' variant={'contained'}>Hello world 1</Button>
        <StyledBtn color='primary' variant={'contained'}>hello world1</StyledBtn>
      </div>
      <h2>TEst</h2>
    </>
  )
}

export default Material
