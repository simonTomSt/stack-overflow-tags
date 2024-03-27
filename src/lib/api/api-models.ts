export interface TagsResponse {
  items: Tag[];
  has_more: boolean;
  total: number;
}

export interface Tag {
  count: number;
  name: string;
}

export interface SortInput {
  order: 'desc' | 'asc';
  sort: string;
}

export interface PaginationInput {
  page: number;
  pagesize: number;
}

export interface PaginationInfo {
  hasMore: boolean;
  total: number;
}

export enum SortOrder {
  Desc = 'desc',
  Asc = 'asc',
}

export enum TagsSortBy {
  Popular = 'popular',
  Activity = 'activity',
  Name = 'name',
}
