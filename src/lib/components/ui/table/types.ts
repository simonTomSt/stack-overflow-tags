import { HTMLAttributes, ReactNode } from 'react';
import { TableOptions, RowData } from '@tanstack/react-table';
import { SortOrder } from '@/lib/api/api-models';

export type TableProps<T extends RowData> = {
  data: TableOptions<T>['data'];
  columns: TableOptions<T>['columns'];
  skeletonsAmount?: number;
  noDataComponent?: ReactNode;
  loading?: boolean;
  onSort?: (field: string, direction: SortOrder) => void;
} & HTMLAttributes<HTMLTableElement>;
