function isSorted<T>(array: T[]): boolean {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        return false;
      }
    }
    return true;
  }

export const binarySearch = <T>(arr:T[],target :T):number=>{
    if(!isSorted(arr)){
        return -1
    }
    let left=0;
    let right=arr.length-1;
    let mid
    while (left <= right){
        mid= Math.floor((left+right)/2)
        if (arr[mid]==target){
            return mid
        }
        if(arr[mid]<target){
            left=mid+1
        }else{
            right=mid-1
        }
    }
    return -1
}