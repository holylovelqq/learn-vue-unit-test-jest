import { shallowMount, createLocalVue } from '@vue/test-utils'
import Router from 'vue-router'
import elementUI from 'element-ui'
import AppHeader from '@/components/common/AppHeader'

const localVue = createLocalVue()
localVue.use(elementUI)
localVue.use(Router)

describe('Appheader.vue', () => {
  const wrapper = shallowMount(AppHeader, {localVue})
  it('AppHeader DOM test', () => {
    expect(wrapper.is(AppHeader)).toBeTruthy()
    expect(wrapper.find('.elmenu').exists()).toBe(true)
    expect(wrapper.find('.elmenuitem').text()).toBe('Home')
  })

  it('appheader handleSelect test', () => {
    wrapper.vm.handleSelect()
    expect(wrapper.vm.testKey).toBe(5)
  })

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
