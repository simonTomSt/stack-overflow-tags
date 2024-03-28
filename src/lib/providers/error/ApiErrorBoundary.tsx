import { FallbackError } from '@/lib/components/ui/error';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface ApiErrorBoundaryProps {
  children: ReactNode;
}
export const ApiErrorBoundary = ({ children }: ApiErrorBoundaryProps) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <FallbackError onTryAgain={resetErrorBoundary} />
        )}
      >
        {children}
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);
