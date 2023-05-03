class StackNode {
    public data: any;
    public next: StackNode | null;
  
    constructor(data: any) {
      this.data = data;
      this.next = null;
    }
  }
  
export class Stack <T>{
    private top: StackNode | null;
    private count: number;
  
    constructor() {
      this.top = null;
      this.count = 0;
    }
  
    public push(data: any): void {
      const newNode = new StackNode(data);
      newNode.next = this.top;
      this.top = newNode;
      this.count++;
    }
  
    public pop(): any {
      if (!this.top) {
        return undefined
      }
  
      const data = this.top.data;
      this.top = this.top.next;
      this.count--;
      return data;
    }
  
    public peek(): any {
      if (!this.top) {
        return undefined
      }
  
      return this.top.data;
    }
  
    public isEmpty(): boolean {
      return !this.top;
    }
  
    public size(): number {
      return this.count;
    }
  }
  