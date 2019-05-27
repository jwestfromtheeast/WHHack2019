// Just like the main runner runner file runs our entire web application,
// This is the runner file for all of our routes!
// Start by importing the routes you have created
const aboutRoutes = require("./about");
const educationRoutes = require("./education");
const rootRoutes = require("./root");

// Syntax to navigate/route a user based on the address they navigate to
// If the user goes to "/about" on our website, it looks for what to do within our about.js file, for example
const constructorMethod = app => {
  app.use("/", rootRoutes)
  app.use("/about", aboutRoutes);
  app.use("/education", educationRoutes);

  // The star operator is a wildcard, or encompasses all other routes not included above
  // Good practice to include this so your site knows what to do no matter what page is navigated to
  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

// Always include this below our routes files
module.exports = constructorMethod;
