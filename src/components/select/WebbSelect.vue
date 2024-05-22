<template>
  <div>
    <select>
      <option
        v-for="(option, index) in options"
        :key="`select-option-${index}`"
        :value="option.value"
      >
        {{ option.label }}
      </option>
  </div>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'

import type { PropType } from 'vue'
import type { SelectOption } from './SelectOption'

const button = cva('button', {
  variants: {
    intent: {
      danger: 'danger',
      primary: 'primary',
      secondary: 'secondary',
      success: 'success',
      warning: 'warning'
    },
    size: {
      large: 'large',
      medium: 'medium',
      small: 'small'
    },
    outlined: {
      true: 'outlined'
    },
    transparent: {
      true: 'transparent'
    }
  }
})

type ButtonProps = VariantProps<typeof button>

defineProps({
  intent: {
    default: 'primary',
    type: String as PropType<ButtonProps['intent']>
  },
  icon: {
    type: String
  },
  iconPosition: {
    default: 'left',
    type: String
  },
  options: {
    type: Object as PropType<SelectOption[]>
  },
  size: {
    default: 'medium',
    type: String as PropType<ButtonProps['size']>
  },
  srLabel: {
    default: 'medium',
    type: String as PropType<ButtonProps['size']>
  },
  transparent: {
    type: Boolean as PropType<ButtonProps['outlined']>
  }
})
</script>

<style scoped>
.button {
  border-style: solid;
  border-width: 1px;
}

.danger {
  background-color: theme('colors.red.700');
  border-color: theme('colors.red.700');
  color: theme('colors.slate.50');
}

.danger:hover {
  background-color: theme('colors.red.600');
}

.primary {
  background-color: theme('colors.cyan.500');
  border-color: theme('colors.cyan.500');
  color: theme('colors.slate.950');
}

.primary:hover {
  background-color: theme('colors.cyan.400');
}

.secondary {
  background-color: theme('colors.lime.500');
  border-color: theme('colors.lime.500');
  color: theme('colors.slate.950');
}

.secondary:hover {
  background-color: theme('colors.lime.400');
  color: theme('colors.slate.950');
}

.success {
  background-color: theme('colors.green.500');
  border-color: theme('colors.green.500');
  color: theme('colors.slate.950');
}

.success:hover {
  background-color: theme('colors.green.400');
  color: theme('colors.slate.950');
}

.warning {
  background-color: theme('colors.yellow.500');
  border-color: theme('colors.yellow.500');
  color: theme('colors.slate.950');
}

.warning:hover {
  background-color: theme('colors.yellow.400');
  color: theme('colors.slate.950');
}

.small {
  border-radius: theme('borderRadius.md');
  font-size: 0.875rem /* 14px */;
  padding: theme('spacing.1') theme('spacing.[2.5]');
}

.medium {
  border-radius: theme('borderRadius.md');
  font-size: 1rem /* 16px */;
  padding: theme('spacing.2') theme('spacing.[3.5]');
}

.large {
  border-radius: theme('borderRadius.lg');
  font-size: 1.125rem /* 18px */;
  padding: theme('spacing.2') theme('spacing.[5]');
}

.outlined {
  background-color: transparent;
  color: theme('colors.sky.950');
}

.outlined:hover {
  background-color: theme('colors.slate.200');
}

.transparent {
  background-color: transparent;
  color: theme('colors.slate.950');
  border: none;
}

.transparent:hover {
  background-color: theme('colors.slate.200');
  color: theme('colors.slate.950');
}
</style>
