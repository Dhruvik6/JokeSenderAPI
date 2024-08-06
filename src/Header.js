import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <div>
      <Typography color="#000" variant="h2" component="div" sx={{ textAlign: 'center', mb: 2 }}>
        Joke Sender API
      </Typography>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(8px)',
          boxShadow: 'inherit',
          borderRadius: '999px',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              m: 1,
            }}
          >
            <InputBase
              id="email"
              sx={{ ml: 1, flex: 1, borderRadius: '999px', p: 1 }}
              placeholder="Enter Email"
            />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
