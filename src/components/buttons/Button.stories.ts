import '@/plugins/head';
import { type Meta, type StoryFn } from '@storybook/vue';
import Button from './Button.vue';

const render: StoryFn<typeof Button> = (_, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" />'
});

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  render,
  argTypes: {
    label: { control: 'text' },
    outlined: { control: 'boolean' },
    secondary: { control: 'boolean' },
    error: { control: 'boolean' },
    tile: { control: 'boolean' },
    elevated: { control: 'boolean' },
    text: { control: 'boolean' },
    sm: { control: 'boolean' },
    lg: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' }
  },
  parameters: {
    docs: {
      controls: { exclude: ['prefix', 'suffix'] }
    }
  }
};

export const Primary = {
  args: {
    label: 'Medium'
  }
};

export const PrimaryText = {
  args: {
    label: 'Large',
    text: true,
    lg: true
  }
};

export const PrimarySquare = {
  args: {
    label: 'Medium',
    tile: true
  }
};

export const PrimarySmall = {
  args: {
    label: 'Small',
    sm: true
  }
};

export const PrimaryLarge = {
  args: {
    label: 'Large',
    lg: true,
    elevated: true
  }
};

export const PrimaryLargeSquare = {
  args: {
    label: 'Large',
    tile: true,
    lg: true,
    elevated: true
  }
};

export const PrimaryDisabled = {
  args: {
    label: 'Medium',
    disabled: true
  }
};

export const PrimaryOutlined = {
  args: {
    label: 'Outlined Button',
    outlined: true
  }
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    secondary: true
  }
};

export const SecondaryText = {
  args: {
    label: 'Secondary Button',
    secondary: true,
    text: true,
    lg: true
  }
};

export const SecondaryOutlined = {
  args: {
    label: 'Outlined Button',
    secondary: true,
    outlined: true
  }
};

export const ErrorButton = {
  args: {
    label: 'Error Button',
    error: true
  }
};

export const ErrorButtonText = {
  args: {
    label: 'Error Button',
    error: true,
    text: true,
    lg: true
  }
};

export const ErrorOutlined = {
  args: {
    label: 'Error Button',
    error: true,
    outlined: true
  }
};

export const ErrorOutlinedDisabled = {
  args: {
    label: 'Error Button',
    error: true,
    outlined: true,
    disabled: true
  }
};

export default meta;
