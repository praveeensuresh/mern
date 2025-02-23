import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Bform = () => {
  return (
    <div>
      <Typography sx={{ fontFamily: "Poppins, sans-serif", fontSize: "40px", fontWeight: "bold" }}>
      Blog Form
      </Typography>

      <TextField label="Blog Name" variant="outlined"  style={{ marginBottom: '20px',marginTop: '20px' }} /><br></br>
      <TextField label="Description" variant="outlined" style={{ marginBottom: '20px' }} /><br></br>
      <TextField label="Author Name" variant="outlined" style={{ marginBottom: '20px' }} /><br></br>

      <Button variant='contained'>POST</Button>&nbsp;     <Button variant='outlined'>RESET</Button>

    </div>
  )
}

export default Bform
