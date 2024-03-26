import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainLayout } from '@/lib/components/layouts/MainLayout';
import { TagsPage } from '@/pages/tags/TagsPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <TagsPage />
      </MainLayout>
    </QueryClientProvider>
  );
};

export default App;
