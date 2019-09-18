import { extname } from './extname'

describe('extname()', () => {

    it('should parse .png extname', () => {
        expect(extname('abc-123_Q1.png')).toBe('.png');
    });

    it('should parse .jpg', () => {
        expect(extname('abc-123_Q1.jpg')).toBe('.jpg');
    });

    it('should parse .jpeg', () => {
        expect(extname('abc-123_Q1.jpeg')).toBe('.jpeg');
    });

    it('should parse .webp', () => {
        expect(extname('abc-123_Q1.webp')).toBe('.webp');
    });

    it('should not poop when there is no extname', () => {
        expect(extname('abc-123_Q1')).toBe('');
    });

    it('should not poop when there is just a trailing stop (.)', () => {
        expect(extname('abc-123_Q1.')).toBe('.');
    });

    it('should not poop when there is a bunch of poop', () => {
        expect(extname('abc-123_Q1.💩💩💩')).toBe('.💩💩💩');
    });

    it('should not poop when there are no params', () => {
        expect(extname('abc-123.💩')).toBe('.💩');
    });

    it('should not poop when there are no params and no extname', () => {
        expect(extname('abc-123')).toBe('');
    });

})
