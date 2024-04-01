/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import { Table } from './Table';

const mockData = [
  { id: 1, name: 'Item 1', value: 'Value 1' },
  { id: 2, name: 'Item 2', value: 'Value 2' },
];

const mockColumns = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: (info: any) => info.getValue(),
  },
  {
    accessorKey: 'value',
    header: 'Value',
    cell: (info: any) => info.getValue(),
  },
];

describe('Table Component', () => {
  test('displays skeleton loaders when loading', () => {
    const skeletonsAmount = 2;
    render(
      <Table
        loading={true}
        data={[]}
        columns={mockColumns}
        skeletonsAmount={skeletonsAmount}
      />
    );
    expect(screen.getAllByTestId('skeleton').length).toBe(
      skeletonsAmount * mockColumns.length
    );
  });

  test('renders data correctly', () => {
    render(<Table loading={false} data={mockData} columns={mockColumns} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  test('shows no data component when there is no data', () => {
    const NoDataComponent = () => <div>No Data Available</div>;
    render(
      <Table
        loading={false}
        data={[]}
        columns={mockColumns}
        noDataComponent={<NoDataComponent />}
      />
    );
    expect(screen.getByText('No Data Available')).toBeInTheDocument();
  });

  test('renders correct number of rows and columns', () => {
    render(<Table loading={false} data={mockData} columns={mockColumns} />);
    expect(screen.getAllByRole('row').length).toBe(mockData.length + 1); // +1 for the header row
    expect(screen.getAllByRole('columnheader').length).toBe(mockColumns.length);
  });
});
