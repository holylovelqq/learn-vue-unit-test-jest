import {
  shallowMount
} from '@vue/test-utils'
import FuncTest from '@/components/FuncTest'

describe('functest', () => {
  it('changemessage', () => {
    const wrapper = shallowMount(FuncTest)
    const button = wrapper.find('#btn')
    const messageComponent = wrapper.find('h1')
    button.trigger('click')
    expect(messageComponent.text()).toEqual('false')
    button.trigger('click')
    expect(messageComponent.text()).toEqual('true')
  })
})
