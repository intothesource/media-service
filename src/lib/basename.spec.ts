import { basename } from './basename'

describe('basename()', () => {

    it('should parse abc-123_Q1.png basename from /foo/test/abc-123_Q1.png', () => {
        const base = basename('/foo/test/abc-123_Q1.png')
        expect(base).toBe('abc-123_Q1.png')
    })

    it('should parse abc-123_Q1 basename without extname from /foo/test/abc-123_Q1.png', () => {
        const base = basename('/foo/test/abc-123_Q1.png', '.png')
        expect(base).toBe('abc-123_Q1')
    })

    it('should not poop when there is no ext', () => {
        expect(basename('abc-123_Q1')).toBe('abc-123_Q1')
    })

    it('should not poop when there is no ext with leading slashes', () => {
        expect(basename('/foo/bar/abc-123_Q1')).toBe('abc-123_Q1')
    })

    it('should not poop when there is no ext with leading slashes and proto', () => {
        expect(basename('foo://bar/abc-123_Q1')).toBe('abc-123_Q1')
    })

    it('should not poop when there is just a trailing stop (.)', () => {
        expect(basename('.')).toBe('.')
    })

    it('should not poop when there is just a trailing stop (.) as ext', () => {
        expect(basename('.', '.')).toBe('')
    })

    it('should not poop when there is a bunch of poop', () => {
        expect(basename('💩://💩/abc-123_Q1.💩💩💩')).toBe('abc-123_Q1.💩💩💩')
    })

    it('should not poop when there are no params', () => {
        expect(basename('abc-123.💩')).toBe('abc-123.💩')
    })

    it('should not poop when there are no params and no basename', () => {
        expect(basename('abc-123')).toBe('abc-123')
    })

})
