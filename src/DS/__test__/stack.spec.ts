import { Stack } from "../stack";
describe('Stack', () => {
    let stack: Stack<number>;
  
    beforeEach(() => {
      stack = new Stack<number>();
    });
  
    it('should initialize an empty stack', () => {
      expect(stack.size()).toBe(0);
      expect(stack.isEmpty()).toBe(true);
    });
  
    it('should push items to the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
  
      expect(stack.size()).toBe(3);
      expect(stack.isEmpty()).toBe(false);
    });
  
    it('should pop items from the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
  
      const poppedItem = stack.pop();
  
      expect(poppedItem).toBe(3);
      expect(stack.size()).toBe(2);
    });
  
    it('should return undefined when popping from an empty stack', () => {
      const poppedItem = stack.pop();
  
      expect(poppedItem).toBeUndefined();
      expect(stack.size()).toBe(0);
    });
  
    it('should peek at the top item of the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
  
      const topItem = stack.peek();
  
      expect(topItem).toBe(3);
      expect(stack.size()).toBe(3);
    });
  
    it('should return undefined when peeking at the top item of an empty stack', () => {
      const topItem = stack.peek();
  
      expect(topItem).toBeUndefined();
      expect(stack.size()).toBe(0);
    });
  
    // it('should clear the stack', () => {
    //   stack.push(1);
    //   stack.push(2);
    //   stack.push(3);
  
    //   stack.clear();
  
    //   expect(stack.size()).toBe(0);
    //   expect(stack.isEmpty()).toBe(true);
    // });
  });
  