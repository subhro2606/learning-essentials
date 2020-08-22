const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({
  extended: true
}));

const https = require('https');


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {
  var searchKey = req.body.searchKey;
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=4dd3ff9ee578267e49dd2e195105a196&units=metric`;
  console.log(searchKey);
  https.get(url, function(response) {
    console.log(response.statusCode);
    /*Get hold of the data from the resposne*/
    response.on('data', (data) => {
      /*Parse the data into a json object*/
      const weatherdata = JSON.parse(data);
      const temperature = weatherdata.main.temp;
      const description = weatherdata.weather[0].description;
      const weatherIcon = weatherdata.weather[0].icon;
      var iconUrl = "http://openweathermap.org/img/wn/";
      iconUrl = iconUrl + weatherIcon + "@2x.png";
      res.write(`<h1>The tenperature in ${searchKey} is ${temperature} degrees Celsius</h1>`);
      res.write("<p>Weather description: " + description + "</p>");
      res.write("<img src=\"" + iconUrl + "\">");
      res.send();
    });
  });
});

app.listen("3000", () => console.log(`Server Started on Port 3000`));
