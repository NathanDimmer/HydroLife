// replace these static values
let dailySipGoal = 16;
let currentSipIntake = 10;

function toLitres(value){
  return (value) + " sips";
}

var ctx = document.getElementById('goalBar').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        datasets: [{
            label: 'Sips Reached of Daily Goal',
            backgroundColor: 'rgb(255, 168, 114)',
            borderColor: 'rgb(255, 168, 114)',
            data: [currentSipIntake],
          }]
    },

    // Configuration options go here
    options: {
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true,
            max: dailySipGoal,
            callback: function(value, index, values) {
              return toLitres(value);
            }
          }
        }]
      }
    }
});
