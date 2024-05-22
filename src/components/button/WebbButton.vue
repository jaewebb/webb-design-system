<template>
  <div>
    <button
      :id="id"
      :class="button({ intent, size, outlined, transparent })"
      type="button"
      @click="click"
    >
      <i v-if="icon && iconPosition === 'left'" :class="getClass(`fa-solid fa-${icon}`)"></i>
      <slot />
      <i v-if="icon && iconPosition === 'right'" :class="getClass(`fa-solid fa-${icon}`)"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { v4 as uuidv4 } from 'uuid'

import type { PropType } from 'vue'

const button = cva('button', {
  variants: {
    intent: {
      danger: 'danger',
      primary: 'primary',
      secondary: 'secondary',
      success: 'success',
      warning: 'warning'
    },
    // mode: {
    //   dark: 'dark',
    //   light: 'light'
    // },
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

const props = defineProps({
  id: {
    default: uuidv4(),
    type: String
  },
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
  // mode: {
  //   default: 'light',
  //   type: String as PropType<ButtonProps['mode']>
  // },
  outlined: {
    type: Boolean as PropType<ButtonProps['outlined']>
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

const slots = useSlots()

const emit = defineEmits(['click'])
const click = () => emit('click')

function getClass(currentClass: string) {
  if (props.icon) {
    if (!slots.default) return currentClass // nothing in the slot means we don't need padding
    if (props.iconPosition === 'right') return `${currentClass} ml-1`
    return `${currentClass} mr-1`
  }
  return currentClass
}
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

.dark {
  color: theme('colors.slate.50');
}

.light {
  color: theme('colors.slate.950');
}
</style>
