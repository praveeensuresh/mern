import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog Dashboard
          </Typography>

          {/* <Button
          variant="contained"
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            borderRadius: "12px",
            boxShadow: 3,
            "&:hover": { backgroundColor: "#1565c0" },
          }}
        ><Link to='/form'style={{color:'white'}}>Home</Button>&nbsp;&nbsp; */}


        <Button
        variant="contained"
        sx={{
          backgroundColor:"#",
          color: "white",
          borderRadius: "12px",
          boxShadow: 3,
          "&:hover": { backgroundColor: "#1b5e20" },
        }}><Link to='/blog'style={{color:'white'}}>Home</Link></Button>&nbsp;&nbsp;&nbsp;



        <Button
        variant="contained"
        sx={{
          backgroundColor:"#",
          color: "white",
          borderRadius: "12px",
          boxShadow: 3,
          "&:hover": { backgroundColor: "#1b5e20" },
        }}><Link to='/form'style={{color:'white'}}>new post</Link></Button>




        </Toolbar>
      </AppBar>
    </Box>
    </div>

  )
}

export default Home


