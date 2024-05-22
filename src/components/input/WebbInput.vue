<template>
  <div :class="labelPosition === 'top' ? 'flex flex-col' : 'flex flex-row items-center'">
    <label class="mr-3">{{ label }}</label>
    <input :class="input({ size, width })" :type="type" />
  </div>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'
import { v4 as uuidv4 } from 'uuid'

import type { PropType } from 'vue'
import type { InputType } from './InputType'

const input = cva('input', {
  variants: {
    size: {
      large: 'large',
      medium: 'medium',
      small: 'small'
    },
    width: {
      large: 'width-large',
      medium: 'width-medium',
      small: 'width-small'
    }
  }
})

type InputProps = VariantProps<typeof input>

defineProps({
  id: {
    default: uuidv4(),
    type: String
  },
  label: {
    default: '',
    type: String
  },
  labelPosition: {
    default: 'left',
    type: String
  },
  size: {
    default: 'medium',
    type: String as PropType<InputProps['size']>
  },
  type: {
    default: 'text',
    type: String as PropType<InputType>
  },
  width: {
    default: 'medium',
    type: String as PropType<InputProps['width']>
  }
})
</script>

<style scoped>
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

.width-small {
  max-width: theme('width.1/2');
}

.width-medium {
  max-width: theme('width.3/4');
}

.width-large {
  max-width: theme('width.full');
}
</style>
