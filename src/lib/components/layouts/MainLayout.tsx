import { Container } from '@mui/material';
import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <header>StackOverflow Tags</header>
      <main>
        <Container maxWidth='md'>{children}</Container>
      </main>
      <footer></footer>
    </>
  );
};
