import axios from 'axios'
import Users from '@/components/users.js'

jest.mock('axios')

test('should fetch users', () => {
  const resp = {data: [{name: 'Bob'}]}
  // axios.get.mockResolvedValue(resp)

  // or you could use the following depending on your use case:
  axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(users => expect(users).toEqual(resp.data))
})
