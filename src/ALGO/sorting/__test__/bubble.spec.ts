import { bubbleSort } from "../bubble";
describe('Bubble Sort', () => {
    it('should sort an array of numbers in ascending order', () => {
      const arr = [5, 3, 8, 4, 2];
      const expected = [2, 3, 4, 5, 8];
      const sorted = bubbleSort(arr);
      expect(sorted).toEqual(expected);
    });
  
    it('should sort an array of strings in lexicographic order', () => {
      const arr = ['orange', 'apple', 'banana', 'pear'];
      const expected = ['apple', 'banana', 'orange', 'pear'];
      const sorted = bubbleSort(arr);
      expect(sorted).toEqual(expected);
    });
  
    it('should return an empty array for an empty input array', () => {
      const arr: number[] = [];
      const expected: number[] = [];
      const sorted = bubbleSort(arr);
      expect(sorted).toEqual(expected);
    });
  
    it('should return the input array if it is already sorted', () => {
      const arr = [1, 2, 3, 4, 5];
      const expected = [1, 2, 3, 4, 5];
      const sorted = bubbleSort(arr);
      expect(sorted).toEqual(expected);
    });
  
    it('should correctly sort an array with duplicate values', () => {
      const arr = [5, 3, 2, 5, 8, 2, 9];
      const expected = [2, 2, 3, 5, 5, 8, 9];
      const sorted = bubbleSort(arr);
      expect(sorted).toEqual(expected);
    });
  });  