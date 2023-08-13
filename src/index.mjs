// importing "process" and "path" modules make path to the input file to be read
import path from "path";
import process from "process";

import FileReader from "./partials/fileReader.mjs";
import MergeSort from "./partials/sortAlgo.mjs";
import UserInput from "./partials/userInput.mjs";
import FileSaver from "./partials/saveResult.mjs";
import { getCustomDate } from "./partials/customDateFormater.mjs";
async function main() {
  // an empty array that will hold the numbers read from user file
  let numbersFromFile = [];

  // taking user input
  const userInput = await new UserInput().getUserInput();

  // locating the requested file by providing path to the file
  const filePath = path.join(process.cwd(), "/src", userInput.fileName);
  const fileReader = new FileReader(filePath);

  // reading number from file content, calling method to read & parse valid numbers
  try {
    numbersFromFile = fileReader.readNumbers();
    userInput.originalArray = numbersFromFile;
  } catch (error) {
    // throw errors that might occur
    console.error("Error:", error.message);
  }

  // performing sort based on the user input
  userInput.sortedArray = new MergeSort().splitter(
    numbersFromFile,
    userInput.ascending
  );

  // adding "timestamp" & "u_id" (unique ID) for keep track/log
  userInput.u_id = Date.now();

  
  userInput.timestamp = getCustomDate();

  // saving results to a file by providing path and data
  const saveFilePath = path.join(
    process.cwd(),
    "/src/results",
    `${userInput.outputFileName}.json`
  );

  const saveData = new FileSaver(saveFilePath).saveDataToFile(userInput);

  // closing the program
  return "Program closed, peace-out!";
}
main();
