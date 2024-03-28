import { Container } from '@mui/material';
import { ReactNode } from 'react';
import { Header } from '../ui/header';
import { Footer } from '../ui/footer';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth='md'>{children}</Container>
      </main>
      <Footer />
    </>
  );
};
