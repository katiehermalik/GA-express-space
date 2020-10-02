
const express= require('express');
const router = express.Router();

const marsMissions = require('../models/missionsModel');

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"



// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission



module.exports = router;