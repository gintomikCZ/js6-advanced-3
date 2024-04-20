// BUBBLE SORT - sortovací algoritmus

const ar = [20, 10, 5, 1, -7, 19, 2, -4]

const swap = (arr, index1, index2) => {
  const temporary = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temporary
}

const bubbleSort = (arr => {
  let counter = 0
  for (let k = 0; k < arr.length - 1; k++) {
    for (let i = 0; i < arr.length - 1 - k; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1)
      }
      counter++
    }
    console.log(arr)
  }
  console.log(counter)
})

bubbleSort(ar)
// console.log(ar)

// [10, 7, 4, 9]
// [7, 4, 9, 10]



/*
[7, 10, 4, 9]
[7, 4, 10, 9]
[7, 4, 9, 10]

[......., 10]
[4, 7, 9]

[....., 9, 10]
[4, 7]

[......, 7, 9, 10]
[4, 7, 9, 10]

*/

/*
vnější cyklus
  vnitřní cyklus
    když najdeme špatnou dvojici, tak ji prohodíme
*/
