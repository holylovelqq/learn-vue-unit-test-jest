import {shallowMount, createLocalVue} from '@vue/test-utils'
import Incidents from '@/components/pages/Incidents'
import axios from 'axios'

const mockData = {data: [{name: 'Bob'}]}
jest.mock('axios', () => {
  return ({
    get: jest.fn(() => Promise.resolve(mockData)),
    post: jest.fn(() => Promise.resolve(mockData))
  })
})
const localVue = createLocalVue()
localVue.prototype.$axios = axios

describe('Incidents.vue', () => {
  let wrapper
  beforeEach(() => {
    axios.get.mockClear()
    wrapper = shallowMount(Incidents, {localVue})
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('Incidents getIncidents test', () => {
    const mockFn = jest.fn()
    wrapper.setMethods({getIncidents: mockFn})
    wrapper.vm.init()
    expect(mockFn).toBeCalled()
  })

  it('incidents axios.get becalled test', () => {
    wrapper.vm.getIncidents()
    expect(axios.get).toBeCalled()
  })
  it('incidents getIncidents returnValue test', () => {
    return wrapper.vm.getIncidents().then(result => {
      expect(result).toEqual(mockData)
    })
  })

  it('incidents getAlerts returnValue test', () => {
    return wrapper.vm.getAlerts().then(result => {
      expect(result).toEqual(mockData)
    })
  })
})
