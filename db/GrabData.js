const fs = require("fs");
const fetch = require("node-fetch");

grabData();

function grabData() {
  fetch(
    "https://holidayapi1.p.rapidapi.com/holidays?pretty=false&format=json&country=US&year=2019",
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
      fs.writeFile(
        "./amiibo_fetch.json",
        JSON.stringify(res, null, 2),
        function(err) {
          if (err) {
            return console.log(err);
          }
          console.log("The file was saved!");
          console.log(res);
        }
      );
    })
    .catch(error => {
      console.log(error);
    });
}
