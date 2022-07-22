let accuweather = require('node-accuweather')()('Qs4zPGBXDLzJ1fHdbllxluIhNjtjSckY');
accuweather.getCurrentConditions("Madrid", {unit: "Celsius"})
  .then(function(result) {
    console.log(result);
  });