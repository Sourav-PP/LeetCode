/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count=0;
    for(let i=0;i<arr1.length;i++){
        let flag=false;
        for(let j=0;j<arr2.length;j++){
            if(Math.abs(arr1[i]-arr2[j])<=d){
                flag=true;
                break;
            }
        }
        if(flag==false){
            count+=1;
        }
    }
    return count;
};