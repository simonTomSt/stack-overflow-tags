import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';

interface FallbackErrorProps {
  onTryAgain: () => void;
}

export const FallbackError: React.FC<FallbackErrorProps> = ({ onTryAgain }) => {
  const { t } = useTranslation('main');

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
        {t('error_ocurred')}
      </Typography>
      <Button variant='outlined' color='primary' onClick={onTryAgain}>
        {t('try_again')}
      </Button>
    </Box>
  );
};
