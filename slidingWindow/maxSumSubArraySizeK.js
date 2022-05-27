/* Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
*/


const maxSum = function(k, arr) {
  // declare sum with value -1, since arr has only positive ints
  let max = -1;
  // initialize start and end of window
  let wStart = 0;
  let wSum = 0;

  // iterate over array
  for(let wEnd = 0; wEnd < arr.length; wEnd++) {
    wSum += arr[wEnd];
    // checks if window size is less than k
    if( wEnd >= k - 1) {
      // check if sum is greater than max; if so reassign
      if ( wSum > max ) {
        max = wSum;
      }
      // slide window; subtract the first, move start to next
      wSum -= arr[wStart];
      wStart += 1;
    }
  }
  return max;
}

// examples
const input1= [2, 1, 5, 1, 3, 2];
console.log(maxSum(3, input1)); // 9

const input2= [2, 3, 4, 1, 5];
console.log(maxSum(2, input2)); // 7
