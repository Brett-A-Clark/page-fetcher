const request = require('request');

const fs = require('fs');
const url = process.argv[2];
const localFilePath = process.argv[3];

request(url, (error, response, body) => {
  // Print the error if one occurred
  console.log('error:', error); 
  // Print the response status code if a response was received
  console.log('statusCode:', response && response.statusCode); 
  // Print the HTML
  console.log('body:', body); 

  if (response.statusCode === 200) {
    fs.writeFile(localFilePath, body, err => {
      if (err) {
        console.error(err)
        return
      }

      console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}.`);
    });
  }
});