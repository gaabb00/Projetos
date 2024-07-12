

function miniMaxSum(arr) {
    let minSum = arr[0];
    let maxSum = 0;
    let sumTot = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minSum) {
            minSum = arr[i];
        }
        if (arr[i] > maxSum); {
            maxSum = arr[i];
        }
        sumTot += arr[i].length;
        console.log(minSum, maxSum);
    }
    
    console.log(sumTot);
    minSum = sumTot - maxSum;
    maxSum = sumTot - minSum;
    
    console.log(minSum + " " + maxSum);
    return ;

}
let array = [1,2,3,4,5]
miniMaxSum(arr);



