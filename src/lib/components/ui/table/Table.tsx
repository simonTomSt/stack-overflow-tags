import { SortOrder } from '@/lib/api/api-models';
import {
  Box,
  Paper,
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Skeleton,
  TableSortLabel,
} from '@mui/material';
import {
  RowData,
  SortingState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useMemo, useRef, useState } from 'react';
import { TableProps } from './types';

export const Table = <T extends RowData>({
  data,
  columns,
  loading,
  noDataComponent,
  skeletonsAmount = 20,
  onSort,
}: TableProps<T>) => {
  const tableData = useMemo(
    () =>
      loading
        ? (Array.from(
            { length: skeletonsAmount },
            (_, index) => index + 1
          ) as T[])
        : data,
    [data, loading, skeletonsAmount]
  );
  const [sorting, setSorting] = useState<SortingState>([]);
  const sortedInitializedRef = useRef<number>(0);
  const table = useReactTable<T>({
    data: tableData,
    columns,
    manualSorting: true,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    if (sortedInitializedRef.current > 1) {
      const [currentSort] = sorting;
      onSort?.(
        currentSort?.id,
        currentSort?.desc ? SortOrder.Desc : SortOrder.Asc
      );
    }
    sortedInitializedRef.current += 1;
  }, [sorting, onSort]);

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <TableContainer component={Paper}>
          <MUITable sx={{ minWidth: 650 }}>
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const sortDirection = header.column.getIsSorted();
                    const sortEnabled =
                      header.column.getCanSort() &&
                      header.column.columnDef?.enableSorting;

                    return (
                      <TableCell
                        key={header.id}
                        colSpan={header.colSpan}
                        sx={{ width: `${header.getSize()}px` }}
                        {...(sortEnabled
                          ? { onClick: header.column.getToggleSortingHandler() }
                          : {})}
                      >
                        {header.isPlaceholder ? null : (
                          <>
                            {sortEnabled ? (
                              <TableSortLabel
                                active={!!sortDirection}
                                direction={sortDirection || 'asc'}
                              >
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                              </TableSortLabel>
                            ) : (
                              flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )
                            )}
                          </>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell key={cell.id}>
                          {loading ? (
                            <Skeleton data-testid='skeleton' />
                          ) : (
                            flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </MUITable>
          {!tableData.length && !!noDataComponent && (
            <Box sx={{ p: 1.5 }}>{noDataComponent}</Box>
          )}
        </TableContainer>
      </Box>
    </div>
  );
};
