import sum from '@/components/sum.js'

describe('test sum', () => {
  test('test 1 plus 2 result', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('3 plus 5 result', () => {
    expect(sum(3, 5)).toBe(8)
  })
})
