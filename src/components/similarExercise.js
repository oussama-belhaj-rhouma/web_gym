import React from 'react'
import {Box, Stack, Typography} from'@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader'

const similarExercise = (targetMuscleExercises, equipmentExercises) => {
  console.log(equipmentExercises.length)
  return (
    <Box sx={{mt:{lg: "100px" , xs: "30px"}} } >
        <Typography variant='h4'>
            show exercises that hit <span style ={{color: '#ff2625', textTransform: 'capitalize'}}> same target</span>
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
            {targetMuscleExercises.length  ?
             <HorizontalScrollbar data={targetMuscleExercises} />
            : <Loader/> }
        </Stack>
      <Typography variant='h4'>
            show exercises that use <span style ={{color: '#ff2625', textTransform: 'capitalize'}}> same equipment</span>
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
            {equipmentExercises.length  ?
             <HorizontalScrollbar data={equipmentExercises} />
            : <Loader/> }
            
    </Stack>
    

    </Box>
  )
}

export default similarExercise