import { TagsSortBy } from '@/lib/api/api-models';
import { ApiRoutes } from '@/lib/api/api-routes';
import { getTags } from '@/lib/api/services/tags';
import { useTableControl } from '@/lib/hooks/useTableControl';
import { useQuery } from '@tanstack/react-query';

export const TagsPage = () => {
  const { page, pagesize, sort, order } = useTableControl<TagsSortBy>({
    sort: TagsSortBy.Popular,
  });

  const { data } = useQuery({
    queryKey: [ApiRoutes.Tags],
    queryFn: () =>
      getTags({
        page,
        pagesize,
        sort,
        order,
      }),
  });

  return (
    <div>
      {data?.items?.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};
