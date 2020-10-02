// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * MAIN GOAL:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page
//
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

// DEPENDENCIES
const express = require('express');
const app = express();

// PORT
const port = 3000;

// Set View Engine
app.set('view engine', 'ejs');

// Root Route
app.get('/', (req, res) => {
  res.send('<h1>Express Parameters: Missions to Mars!</h1>');
});

// Missions Route
app.use('/missions', missionCtrl);

// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
