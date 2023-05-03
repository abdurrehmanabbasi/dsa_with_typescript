import { isPalindrome } from "./palindrome";
describe('isPalindrome', () => {
  it('returns true for a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('returns true for a single-character string', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('returns false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('returns true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });
});