import { renderHook, act } from '@testing-library/react-hooks';
import { SortOrder } from '@/lib/api/api-models';
import { useTableControl } from './useTableControl';

describe('useTableControl', () => {
  test('initializes with default state', () => {
    const { result } = renderHook(() => useTableControl());
    expect(result.current.page).toBe(1);
    expect(result.current.pagesize).toBe(20);
    expect(result.current.sort).toBe('');
    expect(result.current.order).toBe(SortOrder.Desc);
  });

  test('initializes with overridden state', () => {
    const override = {
      page: 2,
      pagesize: 10,
      sort: 'name',
      order: SortOrder.Asc,
    };
    const { result } = renderHook(() => useTableControl(override));
    expect(result.current.page).toBe(override.page);
    expect(result.current.pagesize).toBe(override.pagesize);
    expect(result.current.sort).toBe(override.sort);
    expect(result.current.order).toBe(override.order);
  });

  test('sets page', () => {
    const { result } = renderHook(() => useTableControl());
    act(() => {
      result.current.setPage(2);
    });
    expect(result.current.page).toBe(2);
  });

  test('sets pagesize and resets page', () => {
    const { result } = renderHook(() => useTableControl({ page: 3 }));
    act(() => {
      result.current.setPagesize(50);
    });
    expect(result.current.page).toBe(1);
    expect(result.current.pagesize).toBe(50);
  });

  test('sets sort input', () => {
    const { result } = renderHook(() => useTableControl());
    act(() => {
      result.current.setSortInput('date', SortOrder.Asc);
    });
    expect(result.current.sort).toBe('date');
    expect(result.current.order).toBe(SortOrder.Asc);
  });

  test('calculates total pages', () => {
    const { result } = renderHook(() => useTableControl({ pagesize: 10 }));
    const totalPages = result.current.getTotalPages(45);
    expect(totalPages).toBe(5);
  });
});
