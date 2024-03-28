import { SortOrder, Tag, TagsSortBy } from '@/lib/api/api-models';
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
  const pageSizesOption = [10, 20, 30, 50];
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
    order: SortOrder.Desc,
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
      <Box sx={{ maxWidth: 130, ml: 'auto', pb: 1 }}>
        <FormControl fullWidth>
          <InputLabel id='pagesize-label'>Items on page</InputLabel>
          <Select<number>
            labelId='pagesize-label'
            value={pagesize}
            label='Items on page'
            onChange={handlePagesizeChange}
          >
            {pageSizesOption.map((sizeOption) => (
              <MenuItem key={sizeOption} value={sizeOption}>
                {sizeOption}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ boxShadow: 2 }}>
        <Table<Tag>
          data={data?.items || []}
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
