import { ApiRoutes } from '@/api/api-routes';
import { getTags } from '@/api/services/tags';
import { useQuery } from '@tanstack/react-query';

export const TagsPage = () => {
  const { data } = useQuery({ queryKey: [ApiRoutes.Tags], queryFn: getTags });

  return (
    <div>
      {data?.items?.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};
