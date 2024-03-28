import { columns } from '@/pages/tags/columns';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@/lib/components/ui/table';
import { Tag } from '@/lib/api/api-models';
import { Box, Typography } from '@mui/material';
import { fn } from '@storybook/test';

const defaultData = [
  {
    last_activity_date: 1711629900,
    count: 2528823,
    name: 'javascript',
  },
  {
    last_activity_date: 1711630544,
    count: 2192165,
    name: 'python',
  },
  {
    last_activity_date: 1711630591,
    count: 1917306,
    name: 'java',
  },
];

const meta = {
  title: 'UI/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  args: {
    columns,
    data: defaultData,
  },
} satisfies Meta<typeof Table<Tag>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = {
  args: {
    loading: true,
    onSort: fn(),
    skeletonsAmount: defaultData.length,
  },
};
export const NoData: Story = {
  args: {
    data: [],
    noDataComponent: (
      <Box sx={{ textAlign: 'center', py: 2 }}>
        <Typography>No data available in table</Typography>
      </Box>
    ),
  },
};
export const NoSorting = {
  args: {
    columns: columns.map((col) => ({ ...col, enableSorting: false })),
  },
};
