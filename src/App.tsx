import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainLayout } from '@/lib/components/layouts/MainLayout';
import { TagsPage } from '@/pages/tags/TagsPage';
import { ApiErrorBoundary } from './lib/providers/error/ApiErrorBoundary';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <ApiErrorBoundary>
          <TagsPage />
        </ApiErrorBoundary>
      </MainLayout>
    </QueryClientProvider>
  );
};

export default App;
