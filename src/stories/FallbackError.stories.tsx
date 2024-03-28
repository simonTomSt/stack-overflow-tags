import { FallbackError } from '@/lib/components/ui/error';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'UI/FallbackError',
  component: FallbackError,
  args: {
    onTryAgain: fn(),
  },
} satisfies Meta<typeof FallbackError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
