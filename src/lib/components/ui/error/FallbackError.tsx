import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface FallbackErrorProps {
  onTryAgain: () => void;
}

export const FallbackError: React.FC<FallbackErrorProps> = ({ onTryAgain }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
        backgroundColor: 'background.paper',
        borderRadius: 1,
        boxShadow: 3,
      }}
    >
      <Typography variant='h6' gutterBottom>
        Oops, an error occurred!
      </Typography>
      <Button variant='outlined' color='primary' onClick={onTryAgain}>
        Try again
      </Button>
    </Box>
  );
};
