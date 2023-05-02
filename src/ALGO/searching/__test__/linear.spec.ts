import { linearSearch } from "../linear";
describe('Linear Search', () => {
    it('should return the index of the first occurrence of the target value', () => {
      const arr = [5, 3, 8, 4, 2];
      const target = 8;
      const expected = 2;
      const result = linearSearch(arr, target);
      expect(result).toEqual(expected);
    });
  
    it('should return -1 if the target value is not found in the array', () => {
      const arr = ['orange', 'apple', 'banana', 'pear'];
      const target = 'watermelon';
      const expected = -1;
      const result = linearSearch(arr, target);
      expect(result).toEqual(expected);
    });
  
    it('should return 0 if the target value is the first element in the array', () => {
      const arr = [5, 3, 8, 4, 2];
      const target = 5;
      const expected = 0;
      const result = linearSearch(arr, target);
      expect(result).toEqual(expected);
    });
  
    it('should return the index of the last occurrence of the target value', () => {
      const arr = [5, 3, 8, 4, 2, 8, 9];
      const target = 8;
      const expected = 5;
      const result = linearSearch(arr, target);
      expect(result).toEqual(expected);
    });
  
    it('should return the index of the target value in an array with only one element', () => {
      const arr = ['apple'];
      const target = 'apple';
      const expected = 0;
      const result = linearSearch(arr, target);
      expect(result).toEqual(expected);
    });
  });
  