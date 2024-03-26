import { apiClient } from '../api-client';
import { TagsResponse } from '../api-models';
import { ApiRoutes } from '../api-routes';

export const getTags = async (): Promise<TagsResponse> => {
  const response = await apiClient.get<TagsResponse>(ApiRoutes.Tags, {
    params: {
      site: 'stackoverflow',
      page: 1,
      pagesize: 10,
    },
  });

  return response.data;
};
