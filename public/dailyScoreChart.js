// replace these static values


function toLitres(value){
  return (value) + " ml";
}

var ctx = document.getElementById('dailyScoreChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Water Intake This Week',
        data: [20, 10, 5, 2, 20, 30, 45],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Water Intake Last Week',
        data: [60, 80, 90, 10, 20, 50, 20],
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
