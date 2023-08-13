// Google says that the algorithm having a worst-case time complexity of O(n log n) is Merge Sort.

// The merge sort algorithm works by recursively dividing the array in half until it reaches an array
// of only one element. Then, it merges the sorted halves of the array together until it reaches the
// original array, which is why it is a good choice for sorting large arrays

// this class represents methods that perform Merge Sort
export default class MergeSort {
  // The "splitter" function splits the array into "left" and "right" sub-arrays and hands them over to
  // the "mergeNSort" function. The "splitter" function recursively calls itself the number of times
  // equal to the length of the provided array
  splitter(input_array, ascending = true) {
    // If the array has more than one element, proceed further with the sorting
    if (input_array.length > 1) {
      // Get the "Median" index of the array to split the array in two halves
      const median = Math.floor(input_array.length / 2);

      // splitting the array into left and right (recursively)
      const leftArr = this.splitter(input_array.slice(0, median));
      const rightArr = this.splitter(input_array.slice(median));

      // performing merge sort based on user choice
      const sortedArray = ascending
        ? this.ascendingMergeNSort(leftArr, rightArr)
        : this.descendingMergeNSort(leftArr, rightArr);

      // returning the sorted array
      return sortedArray;
    } else {
      return input_array;
    }
  }

  // "mergeNSort" takes two inputs as array
  ascendingMergeNSort(l_array, r_array) {
    // "result" is a new array to hold merged and sorted array.
    const result = [];

    // Create iterators for the left and right arrays.
    let leftIndex = 0;
    let rightIndex = 0;

    // loop into arrays while both iterators have not reached the end
    // of their respective arrays, add the smaller element to the result array.
    while (leftIndex < l_array.length && rightIndex < r_array.length) {
      result.push(
        l_array[leftIndex] <= r_array[rightIndex]
          ? l_array[leftIndex++]
          : r_array[rightIndex++]
      );
    }

    // Concatenate the remaining elements from both arrays.
    return result
      .concat(l_array.slice(leftIndex))
      .concat(r_array.slice(rightIndex));
  }

  descendingMergeNSort(l_array, r_array) {
    // "result" is a new array to hold merged and sorted array.
    const result = [];

    // Create iterators for the left and right arrays.
    let leftIndex = 0;
    let rightIndex = 0;

    // loop into arrays while both iterators have not reached the end of their
    // respective arrays, add the greater element to the result array.
    while (leftIndex < l_array.length && rightIndex < r_array.length) {
      result.push(
        l_array[leftIndex] >= r_array[rightIndex]
          ? l_array[leftIndex++]
          : r_array[rightIndex++]
      );
    }

    // Concatenate the remaining elements from both arrays.
    return result
      .concat(l_array.slice(leftIndex))
      .concat(r_array.slice(rightIndex));
  }
}
