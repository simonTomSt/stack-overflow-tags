import {
  PaginationInfo,
  PaginationInput,
  SortInput,
  SortOrder,
} from '@/lib/api/api-models';

export interface TableControlsState<TSortBy extends string = string>
  extends SortInput<TSortBy>,
    PaginationInput,
    PaginationInfo {}

export enum ActionType {
  SET_PAGINATION_INFO = 'SET_PAGINATION_INFO',
  SET_PAGE = 'SET_PAGE',
  SET_PAGESIZE = 'SET_PAGESIZE',
  SET_SORT = 'SET_SORT',
  SET_ORDER = 'SET_ORDER',
}

type SetPaginationInfoAction = {
  type: ActionType.SET_PAGINATION_INFO;
  payload: PaginationInfo;
};

type SetPageAction = {
  type: ActionType.SET_PAGE;
  payload: number;
};

type SetPagesizeAction = {
  type: ActionType.SET_PAGESIZE;
  payload: number;
};

type SetSortAction<TSortBy extends string = string> = {
  type: ActionType.SET_SORT;
  payload: TSortBy;
};

type SetOrderAction = {
  type: ActionType.SET_ORDER;
  payload: SortOrder;
};

export type TableControlAction<TSortBy extends string = string> =
  | SetPaginationInfoAction
  | SetPageAction
  | SetPagesizeAction
  | SetSortAction<TSortBy>
  | SetOrderAction;
