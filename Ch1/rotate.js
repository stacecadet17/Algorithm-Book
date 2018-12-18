function rotate(arr, shiftBy){
  for(var i = 0; i < shiftBy; i++){
    var extra = arr.pop()
    arr.unshift(extra)
  }
  return arr;

}

console.log(rotate([-1, 2, 3, 4, 5, 6], 2));

// 5, 6, 1, 2, 3, 4
