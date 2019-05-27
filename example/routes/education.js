const express = require("express");
const router = express.Router();

const educationInfo = [
  {
    schoolName: "Warren Hills",
    type: "High School",
    location: "Washington, NJ"
  },
  {
    schoolName: "Stevens Institute of Technology",
    type: "University",
    location: "Hoboken, NJ"
  },
  {
    schoolName: "Drexel",
    type: "University",
    location: "Philadelphia, PA"
  }
];

// Base route: user navigates to /education/
router.get("/", async (req, res) => {
  try {
    // Try to send info on all of the schools
    res.send(educationInfo);
  } catch (e) {
    // Something went wrong! Send an error
    res.status(500).send();
  }
});

// If user types in a number after /education, try to find that school in the list
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (req.params.id < educationInfo.length) {
      res.send(educationInfo[id]);
    } else {
      res.send("School not found!");
    }
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
