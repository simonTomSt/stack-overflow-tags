import { Box, Container, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation('main');

  return (
    <Box
      sx={{
        width: '100%',
        backgroundImage: 'linear-gradient(180deg, #CEE5FD, #FFF)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 4, sm: 8 },
          pb: { xs: 4, sm: 8 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant='h1'
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Stack Overflow&nbsp;
            <Typography
              component='span'
              variant='h1'
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: 'primary.main',
              }}
            >
              Tags
            </Typography>
          </Typography>
          <Typography
            textAlign='center'
            color='text.secondary'
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            {t('header_subtitle')}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
