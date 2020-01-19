import hello from '../src'

describe('hello test', () => {
  it('hello should return message string.', () => {
    expect(hello('hoge')).toBe('Hello hoge!')
    expect(hello('hoge', '.')).toBe('Hello hoge.')
  })
})
