import {shallowMount, createLocalVue} from '@vue/test-utils'
import IncidentDetail from '@/components/pages/IncidentDetail'
import axios from 'axios'
import moment from 'moment'

const mockData = {data: {name: 'Bob'}}
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve(mockData))
}))
const localVue = createLocalVue()
localVue.prototype.$moment = moment
const $route = {
  params: {id: 5}
}

localVue.prototype.$axios = axios

describe('IncidentDetail.vue', () => {
  let wrapper
  beforeEach(() => {
    axios.get.mockClear()
    wrapper = shallowMount(IncidentDetail, {localVue, mocks: {$route}})
  })

  afterEach(() => {
    wrapper.destroy()
  })

  // it('incidents Dom test', () => {
  //   // expect(wrapper.find('h1').exists()).toBeTruthy()
  // })
  it('IncidentDetail getIncidentDetail test', () => {
    const mockFn = jest.fn()
    wrapper.setMethods({getIncidentDetail: mockFn})
    wrapper.vm.init()
    expect(mockFn).toBeCalled()
  })
  it('incidentDetail getIncidentDetail returnvalue test', () => {
    return wrapper.vm.getIncidentDetail('5').then(result => {
      expect(result).toEqual(mockData)
    })
  })

  it('IncidentDetail other funcs test', () => {
    expect(wrapper.vm.formatOccured_at('2018-10-16T02:30:42.362000Z')).toBe('2018/10/16 02:30')
  })
})
