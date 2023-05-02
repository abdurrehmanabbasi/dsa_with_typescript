// linearSearch
export const linearSearch = <T>(arr:T[],target :T):number=>{
    let result=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            result=i
        }
    }
    return result
}