import React from 'react'
import Checkbox from '@mui/material/Checkbox';
const CrmCheckBox = () => {
  return (
    <Checkbox
      sx={{
        color:"#D5DAE0",
        // "& .MuiSvgIcon-root" : {
        //   fontSize:30
        // },
        '&.Mui-checked': {
          color: "#F37321",
        },
      }}
      // size='medium'
    />
  )
}

export default CrmCheckBox
