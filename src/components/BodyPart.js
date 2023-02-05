import React from 'react'
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
const BodyPart = ( {item,  bodyPart, setBodyPart}) => {
  return (
    <Stack
    type="button" 
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '8px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      }}
    >
     
      <img src={Icon} alt="dumbbell" style={{ width: '80px', height: '80px' }} /> 
    <Typography>{item}</Typography>
    </Stack>
  )
}

export default BodyPart