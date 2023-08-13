// getting required 'readFileSync' module for file operations from "fs"
import { readFileSync } from "fs";

// this class is to read comma-separated numbers from ".txt" file
export default class FileReader {
  // setting file path provided during initialization
  constructor(filePath) {
    this.filePath = filePath;
  }

  // file reader method to read file content and process the numbers in array format
  readNumbers() {
    // reading the file content
    const fileContent = this.readFile();

    // parsing comma-separated numbers from file content to valid numbers array
    const numbers = this.fileContentToNumbers(fileContent);

    // checking if the file content return valid numbers or null
    if (!numbers) {
      throw new Error("File must contain comma-separated numbers!");
    }

    // return the array of valid numbers
    return numbers;
  }

  // method to read the file content
  readFile() {
    try {
      // read and return file content as UTF-8 string
      return readFileSync(this.filePath, "utf-8");
    } catch (error) {
      // throw an error if file reading fails
      throw new Error(`Error reading file: ${error.message}`);
    }
  }

  // method to parse comma-separated numbers from the file content to array
  fileContentToNumbers(fileContent) {
    const numbers = fileContent
      // split the file content into an array using comma
      .split(",")
      // converting each number in string format to a number, removing extra spaces
      .map((numStr) => parseFloat(numStr.trim()))
      // filter out non-numeric values (any non-numeric value like, string || space || alphabet)
      .filter((num) => !isNaN(num));

    // return only numbers array otherwise return null
    return numbers.length > 0 ? numbers : null;
  }
}
