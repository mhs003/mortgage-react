import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <AppBar position="sticky">
        <Container maxWidth="xl">
            <Toolbar>
                <Typography variant='h5' component='div'>
                    Mortgage Calculator
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar