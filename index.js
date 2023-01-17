// import express (after npm install express)
const express = require('express');

const bodyParser = require("body-parser");

// create new express app and save it as "app"
const app = express();

// configure express to use bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// server configuration
const PORT = 8080;

// create a route for the app
app.get('/', (request, response) => {
    response.send('Hello World');
  });

// route to receive storyblok hook
app.get('/storyblok', (request, response) => {
    response.send('Welcome!');
});

// route to 
app.post('/storyblok',(request,response) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    console.log(request.body);
    });
    


// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});