import {shallowMount, createLocalVue} from '@vue/test-utils'
import App from '@/App.vue'
import Element from 'element-ui'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Element)
localVue.use(VueRouter)

describe('App.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(App, {localVue})
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('App Dom test', () => {
    expect(wrapper.find('#app').exists()).toBe(true)
  })
  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
