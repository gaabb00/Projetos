
function diagonalDifference(arr) {
    
    let primary = 0;
    let secundary = 0;
    
    for (let index = 0; index < arr.length; index += 1) {
    primary += arr[index][index];
    secundary += arr[index][arr.length - 1 - index];
    }
    return Math.abs(primary -secundary);
        
} 
    console.log(diagonalDifference([
        [1,2,3],
        [4,5,6],
        [7,8,9]]));
    

