import React from 'react';
import Box from '@mui/material/Box';

export default function Card() {
  return (
    <div>
      <Box
        sx={{
          width: 600,
          height: 500,
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: 'white',
          position: 'absolute',
          '&:hover': {
            backgroundColor: 'grey',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </div>
  );
}
