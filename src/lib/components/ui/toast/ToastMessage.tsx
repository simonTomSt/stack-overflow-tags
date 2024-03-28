import { Snackbar, Alert, SnackbarProps, AlertProps } from '@mui/material';

interface ToastMessageProps
  extends Pick<SnackbarProps, 'open' | 'autoHideDuration'>,
    Pick<AlertProps, 'severity' | 'children'> {}

export const ToastMessage = ({
  children,
  open,
  severity = 'info',
  autoHideDuration = 6000,
}: ToastMessageProps) => {
  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration}>
      <Alert severity={severity} variant='filled' sx={{ width: '100%' }}>
        {children}
      </Alert>
    </Snackbar>
  );
};
