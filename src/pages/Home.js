import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  useEffect(() => {
    document.title = "GOLD'S GYM"
  }, [])
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  console.log(bodyPart)
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}   />
      <Exercises exercises={exercises}  setExercises={setExercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;