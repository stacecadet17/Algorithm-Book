function reverseArray(arr){
  var x = 0,
  y = arr.length - 1

  while(x<y){
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
    x++
    y--

  }
  return arr;
}

reverseArray([1, 3, 3, 2, 6, 4])
