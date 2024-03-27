import { apiClient } from '../api-client';
import { TagsResponse, SortInput, PaginationInput } from '../api-models';
import { ApiRoutes } from '../api-routes';

// Stack Overflow filter to select only `count`, `name` and `last_activity_date` fields
const FIELDS_FILTER = '!LhRRNhD6rrbsQrKVm4pD14';
const SITE = 'stackoverflow';

interface GetsTagsArgs extends SortInput, PaginationInput {}

export const getTags = async ({
  sort,
  order,
  page,
  pagesize,
}: GetsTagsArgs): Promise<TagsResponse> => {
  const response = await apiClient.get<TagsResponse>(ApiRoutes.Tags, {
    params: {
      site: SITE,
      filter: FIELDS_FILTER,
      sort,
      order,
      page,
      pagesize,
      key: 'p0VuFjArJ*9)AFSKxEdyIw((',
    },
  });

  return response.data;
};
