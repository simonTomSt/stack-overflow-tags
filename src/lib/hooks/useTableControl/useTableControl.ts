import { useCallback, useMemo, useReducer } from 'react';
import { ActionType, TableControlAction, TableControlsState } from './types';
import { PaginationInfo, SortOrder } from '@/lib/api/api-models';

const initialStateFactory = (
  initialStateOverride: Partial<TableControlsState> = {}
): TableControlsState => {
  return {
    hasMore: false,
    total: 0,
    page: 1,
    pagesize: 30,
    sort: '',
    order: SortOrder.Desc,
    ...initialStateOverride,
  };
};

const tableControlsReducer = (
  state: TableControlsState,
  action: TableControlAction
) => {
  switch (action.type) {
    case ActionType.SET_PAGINATION_INFO:
      return {
        ...state,
        hasMore: action.payload.hasMore,
        total: action.payload.total,
      };
    case ActionType.SET_PAGE:
      return { ...state, page: action.payload };
    case ActionType.SET_PAGESIZE:
      return { ...state, pagesize: action.payload, page: 0 };
    case ActionType.SET_SORT:
      return { ...state, sort: action.payload, page: 0 };
    case ActionType.SET_ORDER:
      return { ...state, order: action.payload };
    default:
      return state;
  }
};

export const useTableControl = <TSortBy extends string = string>(
  initialStateOverride?: Partial<TableControlsState<TSortBy>>
) => {
  const initialState = useMemo(
    () => initialStateFactory(initialStateOverride),
    [initialStateOverride]
  );

  const [state, dispatch] = useReducer(tableControlsReducer, initialState);

  const setPaginationInfo = useCallback((info: PaginationInfo) => {
    dispatch({ type: ActionType.SET_PAGINATION_INFO, payload: info });
  }, []);

  const setSort = useCallback((sort: TSortBy) => {
    dispatch({ type: ActionType.SET_SORT, payload: sort });
  }, []);

  const setOrder = useCallback((payload: SortOrder) => {
    dispatch({ type: ActionType.SET_ORDER, payload });
  }, []);

  const setPage = useCallback((payload: number) => {
    dispatch({ type: ActionType.SET_PAGE, payload });
  }, []);

  const setPagesize = useCallback((payload: number) => {
    dispatch({ type: ActionType.SET_PAGESIZE, payload });
  }, []);

  const controls = useMemo(
    () => ({
      ...state,
      sort: state.sort as TSortBy,
      setPaginationInfo,
      setPage,
      setPagesize,
      setSort,
      setOrder,
    }),
    [state, setPaginationInfo, setPage, setPagesize, setSort, setOrder]
  );

  return controls;
};
