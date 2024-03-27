import { PaginationInput, SortInput, SortOrder } from '@/lib/api/api-models';

export interface TableControlsState extends SortInput, PaginationInput {}

export enum ActionType {
  SET_PAGE = 'SET_PAGE',
  SET_PAGESIZE = 'SET_PAGESIZE',
  SET_SORT_INPUT = 'SET_SORT_INPUT',
}

type SetPageAction = {
  type: ActionType.SET_PAGE;
  payload: number;
};

type SetPagesizeAction = {
  type: ActionType.SET_PAGESIZE;
  payload: number;
};

type SetSortInputAction = {
  type: ActionType.SET_SORT_INPUT;
  payload: { order: SortOrder; sort: string };
};

export type TableControlAction =
  | SetPageAction
  | SetPagesizeAction
  | SetSortInputAction;
