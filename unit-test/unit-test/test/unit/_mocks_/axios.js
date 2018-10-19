const mock = {
  get: jest.fn(() => Promise.resolve({
    data: {
      answer: 'mock_yes'
    }
  }))
}
export default mock
