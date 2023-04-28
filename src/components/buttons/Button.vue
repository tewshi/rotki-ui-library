<script lang="ts" setup>
withDefaults(
  defineProps<{
    label?: string;
    disabled?: boolean;
    loading?: boolean;
    outlined?: boolean;
    secondary?: boolean;
    error?: boolean;
    tile?: boolean;
    elevated?: boolean;
    text?: boolean;
    sm?: boolean;
    lg?: boolean;
  }>(),
  {
    label: '',
    disabled: false,
    loading: false,
    outlined: false,
    secondary: false,
    error: false,
    tile: false,
    elevated: false,
    text: false,
    sm: false,
    lg: false
  }
);
</script>
<template>
  <button
    :class="{
      secondary,
      outlined,
      disabled,
      elevated,
      loading,
      error,
      tile,
      text,
      sm,
      lg
    }"
    :disabled="disabled"
    class="btn"
    v-bind="$attrs"
  >
    <slot name="prefix" />
    <span class="btn-label"> {{ label }} </span>
    <slot name="suffix" />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  @apply bg-rui-primary-500 text-white text-sm hover:bg-rui-primary-600 disabled:bg-black/[.12] dark:disabled:bg-white/[.12];
  @apply px-4 py-1.5 rounded-full disabled:text-black/[.26] dark:disabled:text-white/[.30] focus:outline-0 focus-within:outline-0;

  &.tile {
    @apply rounded;
  }

  &.sm {
    @apply px-3 py-1 text-[.8125rem];
  }

  &.lg {
    @apply px-6 py-2 text-base;
  }

  &.elevated {
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12);
  }

  &.outlined {
    @apply border bg-transparent hover:bg-rui-primary-300/5 active:bg-rui-primary-300/10 border-rui-primary-500 text-rui-primary-500;
    @apply disabled:border-black/[.12] dark:disabled:border-white/[.12] disabled:text-black/[.26] dark:disabled:text-white/[.30] #{!important};
  }

  &.text {
    @apply border-none bg-transparent text-rui-primary-500 hover:bg-rui-primary-500/[.04] active:bg-rui-primary-300/10 shadow-none;
    @apply disabled:border-none dark:disabled:border-none disabled:text-black/[.26] dark:disabled:text-white/[.30] #{!important};
  }

  &.secondary {
    @apply bg-rui-secondary-500 hover:bg-rui-secondary-600 text-white;

    &.outlined {
      @apply border bg-transparent border-rui-secondary-500 hover:bg-rui-secondary-300/5 active:bg-rui-secondary-300/10 text-rui-secondary-500;
    }

    &.text {
      @apply border-none bg-transparent text-rui-secondary-500 hover:bg-rui-secondary-500/[.04] active:bg-rui-secondary-300/10;
    }
  }

  &.error {
    @apply bg-rui-error-500 hover:bg-rui-error-600 text-white;

    &.outlined {
      @apply border bg-transparent border-rui-error-500 hover:bg-rui-error-300/5 active:bg-rui-error-300/10 text-rui-error-500;
    }

    &.text {
      @apply border-none bg-transparent text-rui-error-500 hover:bg-rui-error-500/[.04] active:bg-rui-error-300/10;
    }
  }
}
</style>
