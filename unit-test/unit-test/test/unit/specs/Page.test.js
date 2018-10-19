// page.test.js
import Vue from 'vue'
import PageTest from '@/components/PageTest'

describe('page-test', () => {
  it('renders p', () => {
    const Constructor = Vue.extend(PageTest)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('p')).toHaveLength(2)
    expect(vm.$el.querySelectorAll('p')[0].textContent).toEqual('first')
  })
  it('matchs snapshot', () => {
    const Constructor = Vue.extend(PageTest)
    const vm = new Constructor().$mount()
    expect(vm.$el).toMatchSnapshot()
  })
})
