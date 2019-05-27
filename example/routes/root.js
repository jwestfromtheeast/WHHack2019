const express = require("express");
const router = express.Router();

// Create a variable to store the data we want to display on the page
const msg = "Basic Web App demonstration";

// When someone navigates to this address, do this
router.get("/", async (req, res) => {
  try {
    // Send the object you created to the page, so it displays when someone navigates here
    res.json(msg);
  } catch (e) {
    // Something went wrong with the server! Good practice to send a status code
    res.status(500).send();
  }
});

// This must be included at the bottom of every routes file, to connect them
module.exports = router;
