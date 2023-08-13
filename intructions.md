# Program Explanation - Sorting and Saving Data

## Introduction

This document provides an in-depth and step-by-step explanation of the JavaScript program that reads user input, sorts numbers from a file using the merge sort algorithm, appends metadata, and saves the sorted data in a JSON file. The tasks perform by this program are as follows:

1. **Collects** user input.
2. **Reads** comma-separated numbers from a file.
3. **Sorts** the numbers using the merge sort algorithm.
4. **Appends** metadata to the user input.
5. **Saves** the sorted data and metadata in a JSON file.

## Step-by-Step Explanation

### Step 1: Imports

The program starts by importing essential Node.js modules and classes that are used throughout the script for handling file operations:

- `path`: For handling file paths.
- `process`: For accessing the current working directory.
- `readline`: For asynchronously reading user input.
- `fs`: For file system operations, including reading and writing files.

### Step 2: UserInput Class

The **`UserInput`** class is responsible for handling user input. It uses the `readline` module to prompt the user for various inputs:

- **Name:** The user's name, which should be less than or equal to 10 characters.
- **Input _`.txt`_ filename:** The name of the file containing comma-separated numbers.
- **Output filename _(without extension)_:** The name to be used for the JSON output file.
- **Sorting order:** Whether the user wants to sort the data in ascending or descending order.

### Step 3: MergeSort Class

The **`MergeSort`** class implements the merge sort algorithm. It includes methods for:

- **`splitter`** Recursively divides an array into smaller sub-arrays for sorting.
- **`ascendingMergeNSort`** Merging two arrays in ascending order.
- **`descendingMergeNSort`** Merging two arrays in descending order.

### Step 4: FileSaver Class

The **`FileSaver`** class handles saving data to a JSON file. It checks if the output file already exists, reads existing data if available, appends new data, and then writes the combined data back to the file.

- **Reads** existing data _(if available)_ from the file.
- **Appends** new data to the existing `JSON` array.
- **Writes** the updated `JSON` content back to the file.

### Step 5: FileReader Class

The **`FileReader`** class reads numbers from a `.txt` file. It performs the following tasks:

- **Reads** the content of the file using the `readFileSync` method.
- **Converts** the `comma-separated` values into an array of **valid numbers**, filtering out any `non-numeric` values.

### Step 6: getCustomDate Function

The **`getCustomDate`** function generates a formatted date and time string in the "DD-MM-YYYY:HH-MM-SS" format. This function is used to timestamp the data.

### Step 7: Main Function

The **`main`** function is the program's entry point. It initialize the entire process:

- **Collects** user input using the **`UserInput`** class.
- **Constructs** file paths using the **`path`** module.
- **Reads** and parses numbers from the input file using the **`FileReader`** class.
- **Sorts** the numbers using the **`MergeSort`** class based on user preference.
- **Appends** metadata such as **`timestamp`** and **`unique ID`** to the user input.
- **Constructs** a file path for saving results in a **`JSON file`**.
- **Saves** user input and results using the **`FileSaver`** class.
- **Returns** a message indicating program **`closure`**.

### Step 8: Invocation

The `main` function is invoked at the end of the script, initiating the program's execution.

## Conclusion

This JavaScript program showcases a well-structured methodology for efficiently reading, sorting, and storing data. It achieves this by intelligently dividing responsibilities using classes and functions, fostering a distinct separation of roles. By employing modular design principles, it ensures that each step in the process is distinctly clarified and compartmentalized.
