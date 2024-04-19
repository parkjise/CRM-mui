import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import CrmCheckBox from './CrmCheckBox';




const Check = () => {
  return (
    <>
      <CrmCheckBox  defaultChecked />
      <CrmCheckBox />
      <CrmCheckBox disabled />
      <CrmCheckBox disabled checked />
      <FormGroup>
        <FormControlLabel control={<CrmCheckBox defaultChecked />} label="Label" />
        <FormControlLabel required control={<CrmCheckBox />} label="Required" />
        <FormControlLabel disabled control={<CrmCheckBox />} label="Disabled" />
      </FormGroup>
    </>
  )
}

export default Check
