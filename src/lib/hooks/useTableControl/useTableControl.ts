import { useCallback, useMemo, useReducer } from 'react';
import { ActionType, TableControlAction, TableControlsState } from './types';
import { SortOrder } from '@/lib/api/api-models';

const initialStateFactory = (
  initialStateOverride: Partial<TableControlsState> = {}
): TableControlsState => {
  return {
    page: 1,
    pagesize: 20,
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
    case ActionType.SET_PAGE:
      return { ...state, page: action.payload };
    case ActionType.SET_PAGESIZE:
      return { ...state, pagesize: action.payload, page: 1 };
    case ActionType.SET_SORT_INPUT:
      return { ...state, ...action.payload, page: 1 };
    default:
      return state;
  }
};

export const useTableControl = (
  initialStateOverride?: Partial<TableControlsState>
) => {
  const initialState = useMemo(
    () => initialStateFactory(initialStateOverride),
    [initialStateOverride]
  );

  const [state, dispatch] = useReducer(tableControlsReducer, initialState);

  const setPage = useCallback((payload: number) => {
    dispatch({ type: ActionType.SET_PAGE, payload });
  }, []);

  const setPagesize = useCallback((payload: number) => {
    dispatch({ type: ActionType.SET_PAGESIZE, payload });
  }, []);

  const setSortInput = useCallback((sort: string, order: SortOrder) => {
    dispatch({ type: ActionType.SET_SORT_INPUT, payload: { sort, order } });
  }, []);

  const getTotalPages = useCallback(
    (total: number) => Math.ceil(total / state.pagesize),
    [state.pagesize]
  );

  const controls = useMemo(
    () => ({
      ...state,
      setPage,
      setPagesize,
      setSortInput,
      getTotalPages,
    }),
    [state, setPage, setPagesize, setSortInput, getTotalPages]
  );

  return controls;
};
