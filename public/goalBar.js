// replace these static values
let dailyWaterGoal = 500;
let currentWaterIntake = 230;

function toLitres(value){
  return (value) + " ml";
}

var ctx = document.getElementById('goalBar').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        datasets: [{
            label: 'mL Reached of Daily Goal',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [currentWaterIntake],
          }]
    },

    // Configuration options go here
    options: {
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true,
            max: dailyWaterGoal,
            callback: function(value, index, values) {
              return toLitres(value);
            }
          }
        }]
      }
    }
});
