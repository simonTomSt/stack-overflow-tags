import { Tag } from '@/lib/api/api-models';
import { CellContext, TableOptions } from '@tanstack/react-table';

export const columns: TableOptions<Tag>['columns'] = [
  {
    id: 'name',
    accessorKey: 'name',
    header: 'Name',
    enableSorting: true,
    size: 270,
    enableResizing: false,
    cell: (info: CellContext<Tag, string>) => info.getValue(),
  },
  {
    id: 'popular',
    accessorKey: 'count',
    header: 'Popularity',
    enableSorting: true,
    size: 270,
    enableResizing: false,
    cell: (info: CellContext<Tag, string>) => info.getValue(),
  },
  {
    id: 'activity',
    accessorKey: 'last_activity_date',
    header: 'Last activity',
    enableSorting: true,
    size: 270,
    enableResizing: false,
    cell: (info: CellContext<Tag, number>) =>
      info.getValue()
        ? new Date(info.getValue() * 1000).toLocaleDateString([], {
            hour: '2-digit',
            minute: '2-digit',
          })
        : '---',
  },
];
