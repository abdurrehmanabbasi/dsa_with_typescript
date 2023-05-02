import { binarySearch } from "../binary";
describe('binarySearch', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    test('returns index of existing element in sorted array', () => {
      expect(binarySearch(arr, 4)).toBe(3);
    });
  
    test('returns -1 for non-existing element in sorted array', () => {
      expect(binarySearch(arr, 10)).toBe(-1);
    });
  
    test('returns -1 for empty array', () => {
      expect(binarySearch([], 1)).toBe(-1);
    });
  
    test('returns -1 for unsorted array', () => {
      expect(binarySearch([3, 1, 5, 2], 5)).toBe(-1);
    });
  });
  