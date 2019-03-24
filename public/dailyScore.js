var ctx = document.getElementById('dailyScore').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['completed', 'unfinished'],
        datasets: [{
            // label: 'My First dataset',
            backgroundColor: [
              'rgb(114, 135, 255)',
              'rgb(219, 219, 219)'
            ],
            borderColor: [
              'rgb(114, 135, 255)',
              'rgb(219, 219, 219)'
            ],
            data: [80, 20],
        }]
    },

    // Configuration options go here
    options: {}
});
