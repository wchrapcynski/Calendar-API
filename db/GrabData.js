const fs = require("fs");
const fetch = require("node-fetch");
// Change localle to grab a different countries data
const localle = "MX"

grabData();

function grabData() {
  fetch(
    `https://holidayapi1.p.rapidapi.com/holidays?pretty=false&format=json&country=${localle}&year=2019`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "holidayapi1.p.rapidapi.com",
        "x-rapidapi-key": "d62aa87f10msh659d5e38a4f850ep140fbcjsn1d68bf81d844"
      }
    }
  )
    .then(res => res.json())
    .then(res => {
      fs.writeFile(`./holidays${localle}.json`, JSON.stringify(res, null, 2), function(
        err
      ) {
        if (err) {
          return console.log(err);
        }
        console.log("The file was saved!");
        console.log(res);
      });
    })
    .catch(error => {
      console.log(error);
    });
}
