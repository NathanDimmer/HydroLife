var ctx = document.getElementById('dailyScore').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['completed', 'unfinished'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: [
              'rgb(71, 95, 255)',
              'rgb(255, 233, 0)'
            ],
            borderColor: [
              'rgb(71, 95, 255)',
              'rgb(255, 233, 0)'
            ],
            data: [80, 20],
        }]
    },

    // Configuration options go here
    options: {}
});
