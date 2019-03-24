// replace these static values
let weeklyData = [20, 10, 5, 2, 20, 30, 45];
let pastWeekData = [60, 80, 90, 10, 20, 50, 20];

function toLitres(value){
  return (value) + " ml";
}

var ctx = document.getElementById('weeklyData').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Water Intake This Week',
        data: [weeklyData[0], weeklyData[1], weeklyData[2], weeklyData[3], weeklyData[4], weeklyData[5], weeklyData[6]],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Water Intake Last Week',
        data: [pastWeekData[0], pastWeekData[1], pastWeekData[2], pastWeekData[3], pastWeekData[4], pastWeekData[5], pastWeekData[6]],
        borderColor: 'rgba(192, 192, 192, 1)',
        backgroundColor: 'rgba(192, 192, 192, 0.2)',
      }

    ]
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function(value, index, values) {
            return toLitres(value);
          }
        }
      }]
    }
  }
});
