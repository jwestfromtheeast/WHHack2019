// app.js, our main file that executes when we start our application
// This is where everything comes together

// Import our necessary modules
const express = require("express");
const app = express();
const configRoutes = require("./routes");

// Run our routes
configRoutes(app);

// Create a server on the specified port, locally
// "Listen" is a function of express, that has it watch a port and fire when things happen on it
app.listen(3000, () => {
  console.log("We've got a server!");
  console.log("Server running on http://localhost:3000");
});
