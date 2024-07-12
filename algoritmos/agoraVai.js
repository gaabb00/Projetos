function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum = 0;

   arr.sort(arr);


   minSum = arr.slice(0,4).reduce(acc, val) => 