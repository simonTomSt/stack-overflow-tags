import { Tag } from '@/lib/api/api-models';
import { CellContext, TableOptions } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';

export const useTagsColumns = (): TableOptions<Tag>['columns'] => {
  const { t } = useTranslation('main');

  return [
    {
      id: 'name',
      accessorKey: 'name',
      header: t('name'),
      enableSorting: true,
      size: 270,
      enableResizing: false,
      cell: (info: CellContext<Tag, string>) => info.getValue(),
    },
    {
      id: 'popular',
      accessorKey: 'count',
      header: t('popularity'),
      enableSorting: true,
      size: 270,
      enableResizing: false,
      cell: (info: CellContext<Tag, string>) => info.getValue(),
    },
    {
      id: 'activity',
      accessorKey: 'last_activity_date',
      header: t('last_activity'),
      enableSorting: true,
      size: 270,
      enableResizing: false,
      cell: (info: CellContext<Tag, number>) =>
        info.getValue()
          ? new Date(info.getValue() * 1000).toLocaleDateString([], {
              hour: '2-digit',
              minute: '2-digit',
            })
          : '---',
    },
  ];
};
