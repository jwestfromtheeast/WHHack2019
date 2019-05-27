const express = require("express");
const router = express.Router();

// Create a variable to store the data we want to display on the page
const aboutJustin = {
  name: "Justin Westley",
  id: "10416230",
  major: "Computer Engineering"
};

const aboutJason = {
  name: "Jason Tran",
  id: "12345678",
  major: "Computer Science"
};

const allPeople = {
  justin: aboutJustin,
  jason: aboutJason
};

// When someone navigates to this address, do this
router.get("/", async (req, res) => {
  try {
    // Send the object you created to the page, so it displays when someone navigates here
    res.json(allPeople);
  } catch (e) {
    // Something went wrong with the server! Good practice to send a status code
    res.status(500).send();
  }
});

// This must be included at the bottom of every routes file, to connect them
module.exports = router;
