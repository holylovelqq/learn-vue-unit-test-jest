import {shallowMount} from '@vue/test-utils'
import AxiosTest from '@/components/axiosTest'
import axios from 'axios'

jest.mock('axios', () => {
  return ({get: jest.fn(() => Promise.resolve({data: {answer: 'mock_yes'}}))})
})

describe('axiostest', () => {
  let wrapper
  beforeEach(() => {
    axios.get.mockClear()
    wrapper = shallowMount(AxiosTest)
  })

  afterEach(() => {
    wrapper.destroy()
  })
  // 点击按钮后调用了 getAnswer 方法
  it('getAnswer Fn should be called', () => {
    const mockFn = jest.fn()
    wrapper.setMethods({getAnswer: mockFn})
    wrapper.find('button').trigger('click')
    expect(mockFn).toBeCalled()
  })

  // 点击按钮后调用了axios.get方法
  it('axios.get Fn should be called', () => {
    const URL = 'https://yesno.wtf/api'
    wrapper.find('button').trigger('click')
    expect(axios.get).toBeCalledWith(URL)
  })
  // axios.get方法返回值（Promise）
  it('Calls get promise result', () => {
    return expect(wrapper.vm.getAnswer()).resolves.toEqual({data: {answer: 'mock_yes'}})
  })
  it('Calls get promise result 2', () => {
    return wrapper.vm.getAnswer().then(result => {
      expect(result).toEqual({data: {answer: 'mock_yes'}})
    })
  })
  // 可以用 Async/Await 测试 axios.get 方法返回值
  it('Calls get promise result 3', async () => {
    const result = await wrapper.vm.getAnswer()
    expect(result).toEqual({data: {answer: 'mock_yes'}})
  })

  it('Calls get promise result 4', async () => {
    await expect(wrapper.vm.getAnswer()).resolves.toEqual({data: {answer: 'mock_yes'}})
  })
})
