import { Tag, TagsSortBy } from '@/lib/api/api-models';
import { ApiRoutes } from '@/lib/api/api-routes';
import { getTags } from '@/lib/api/services/tags';
import { Table } from '@/lib/components/ui/table';
import { useTableControl } from '@/lib/hooks/useTableControl';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { columns } from './columns';

export const TagsPage = () => {
  const {
    page,
    pagesize,
    sort,
    order,
    setSortInput,
    setPage,
    getTotalPages,
    setPagesize,
  } = useTableControl({
    sort: TagsSortBy.Popular,
  });

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

  const handlePagesizeChange = (event: SelectChangeEvent<number>) => {
    const {
      target: { value },
    } = event;

    setPagesize(Number(value));
  };

  return (
    <section>
      <Box sx={{ maxWidth: 200, ml: 'auto', pb: 1 }}>
        <FormControl fullWidth>
          <InputLabel id='pagesize-label'>Items on page</InputLabel>
          <Select<number>
            labelId='pagesize-label'
            value={pagesize}
            label='Items on page'
            onChange={handlePagesizeChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ boxShadow: 2 }}>
        <Table<Tag>
          // data={data?.items || []}
          data={[]}
          columns={columns}
          loading={isLoading}
          noDataComponent={
            <Box sx={{ textAlign: 'center', py: 2 }}>
              <Typography>No data available in table</Typography>
            </Box>
          }
          onSort={setSortInput}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
        <Pagination
          count={getTotalPages(data?.total || 0)}
          onChange={(_, page) => setPage(page)}
          color='primary'
          page={page}
        />
      </Box>
    </section>
  );
};
