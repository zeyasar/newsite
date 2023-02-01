import React from 'react'
import Slider from '../components/Slider'
import Box from "@mui/material/Box";

const Home = () => {
  return (
    
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
        <Slider/>
      </Box>
    
  )
}

export default Home