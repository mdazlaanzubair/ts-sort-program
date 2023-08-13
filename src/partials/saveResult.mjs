import fs from "fs";

export default class FileSaver {
  constructor(filepath) {
    this.filepath = filepath;
  }

  //   function save data in JSON file
  saveDataToFile(dataToSave) {
    // checking on the location if the file already exist
    const fileExists = fs.existsSync(this.filepath);

    // JSON data holder "jsonDataHolder"
    let jsonDataHolder = [];

    // if file already exist
    if (fileExists) {
      // get all data from file and store as "existingData"
      const existingData = fs.readFileSync(this.filepath, "utf-8");

      // parsing raw file data into JSON format
      try {
        jsonDataHolder = JSON.parse(existingData);
      } catch (error) {
        console.error("Error parsing existing JSON data:", error.message);
      }
    }

    // after successfully parsing of old data, append the new user data
    jsonDataHolder.push(dataToSave);

    // after successfully merging the data then converted into string
    // in order get saved as stringified json content in the json file
    const jsonContent = JSON.stringify(jsonDataHolder, null, 2);
    fs.writeFileSync(this.filepath, jsonContent, "utf-8");
  }
}
