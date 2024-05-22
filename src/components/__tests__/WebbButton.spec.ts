import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WebbButton from '@/components/button/WebbButton.vue'

describe('WebbButton', () => {
  it('has a danger type', () => {
    const wrapper = mount(WebbButton, { props: { intent: 'danger' } })
    expect(wrapper.classes()).toContain('danger')
  })
})
