/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let arr = preferences;
  let solution =0;
  for ( let i = 0; i < arr.length; i++ ) {
    //Spichonee A
    let valOne = arr[i];
    //Spichonee B
    let valTwo = arr[valOne-1];
    //Spichonee C
    let valTree = arr[valTwo-1];
    if (valTree === i+1 && arr[i]!=i+1){
      solution++;
      arr[i],arr[valOne-1],arr[valTwo-1]=-1
    }  
};
return solution;
}

