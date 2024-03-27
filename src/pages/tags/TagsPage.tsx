import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Tag, TagsSortBy } from '@/lib/api/api-models';
import { ApiRoutes } from '@/lib/api/api-routes';
import { getTags } from '@/lib/api/services/tags';
import { Table } from '@/lib/components/ui/table';
import { useTableControl } from '@/lib/hooks/useTableControl';
import { columns } from './columns';
import { Box, Pagination } from '@mui/material';

export const TagsPage = () => {
  const { page, pagesize, sort, order, setSortInput, setPage, getTotalPages } =
    useTableControl({
      sort: TagsSortBy.Popular,
    });

  console.log(sort);

  const { data, isLoading } = useQuery({
    queryKey: [ApiRoutes.Tags, page, sort, order, pagesize],
    queryFn: () =>
      getTags({
        page,
        pagesize,
        sort,
        order,
      }),
    placeholderData: keepPreviousData,
  });

  return (
    <div>
      <Table<Tag>
        data={data?.items || []}
        columns={columns}
        loading={isLoading}
        onSort={setSortInput}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
        <Pagination
          count={getTotalPages(data?.total || 0)}
          onChange={(_, page) => setPage(page)}
          color='primary'
          page={page}
        />
      </Box>
    </div>
  );
};
