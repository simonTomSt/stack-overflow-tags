import { Footer } from '@/lib/components/ui/footer';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Layout/Footer',
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
