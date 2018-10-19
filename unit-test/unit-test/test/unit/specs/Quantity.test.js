import Quantity from '@/components/Quantity'
import { mount } from '@vue/test-utils'

describe('key event tests', () => {
  const wrapper = mount(Quantity)
  it('quantity is 0 by default', () => {
    expect(wrapper.vm.quantity).toBe(0)
  })
  it('cursor up sets quantity to 1', () => {
    // wrapper.trigger('keydown.up')
    wrapper.trigger('keydown', {keyCode: 38})
    expect(wrapper.vm.quantity).toBe(1)
  })
  it('cursor down reduce quantity by 1', () => {
    wrapper.vm.quantity = 10
    wrapper.trigger('keydown.down')
    expect(wrapper.vm.quantity).toBe(9)
  })
  it('escape sets quantity to 1', () => {
    wrapper.vm.quantity = 8
    wrapper.trigger('keydown.esc')
    expect(wrapper.vm.quantity).toBe(0)
  })
  it('magic character A set quantity to 13', () => {
    wrapper.vm.quantity = 8
    wrapper.trigger('keydown', {keyCode: 65})
    expect(wrapper.vm.quantity).toBe(13)
  })
})
