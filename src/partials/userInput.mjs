// "readline" is a module used to take asynchronously reads inline input from cli
import readline from "readline";

// class to process use inputs
export default class UserInput {
  constructor() {}

  // this async function is responsible for getting all user inputs asynchronously
  async getUserInput() {
    // initializing readline module with standard input/output
    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // username holder, it runs the input until the desired input
    // is received from the user
    let name;
    do {
      name = await this.question(reader, "\nWhat is your name? ");
      if (name === "") {
        console.log("Please enter a name.");
      } else if (name.length > 10) {
        console.log("The name must be less than 10 characters.");
      }
    } while (name === "" || name.length > 10);

    // fileName holder, it runs the input until the desired input
    // is received from the user
    let fileName;
    do {
      fileName = await this.question(reader, "\nEnter your .txt filename: ");
      if (!fileName.endsWith(".txt")) {
        console.log("The file name must end with .txt extension.");
      } else if (fileName.includes(" ")) {
        console.log("The file name cannot contain spaces.");
      }
    } while (!fileName.endsWith(".txt") || fileName.includes(" "));

    // outputFileName holder, it runs the input until the desired input
    // is received from the user
    let outputFileName;
    do {
      outputFileName = await this.question(
        reader,
        "\nEnter the output file name (no extension): "
      );
      if (outputFileName.includes(" ")) {
        console.log("The file name cannot contain spaces.");
      } else if (outputFileName.includes(".")) {
        console.log("The output file name cannot contain an extension.");
      }
    } while (outputFileName.includes(".") || outputFileName.includes(" "));

    // ascending holder, it runs the input until the desired input
    // is received from the user
    let ascending;
    do {
      ascending = await this.question(
        reader,
        "\nDo you want to sort it in ascending order? (Y/N): "
      );
      ascending =
        ascending.toLowerCase() === "y" || ascending.toLowerCase() === "yes"
          ? true
          : false;
    } while (ascending !== true && ascending !== false);

    // returning the desired input for further processing
    return { name, fileName, ascending, outputFileName };
  }

  // this asynchronous function takes two parameters: ('reader', 'prompt')
  async question(reader, prompt) {
    // return a new Promise that represents an asynchronous operation
    return new Promise((resolve) => {
      // using 'reader.question' method to prompt the user for input
      // 'prompt' is the text displayed to the user as the input prompt
      // the provided callback function will be executed when the user provides valid input
      reader.question(prompt, (answer) => {
        // calling 'resolve' to fulfill the promise with the user input
        resolve(answer);
      });
    });
  }
}
