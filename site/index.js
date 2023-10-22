/* global Chart, $chart */
import datasets from './series.js'

const config = {
  type: 'scatter',
  data: {
    datasets
  },
  options: {
    scales: {
      x: {
        type: 'logarithmic',
        position: 'bottom'
      },
      y: {
        type: 'logarithmic',
        position: 'left'
      }
    }
  }
}
/*
const config =  {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
}
*/
/*

const logarithmic = true

const options = {
  animationEnabled: true,
  title: {
    text: 'All Objects'
  },
  axisX: {
    logarithmic,
    title: 'Radius',
    suffix: 'm'
  },
  axisY: {
    logarithmic,
    title: 'Mass',
    suffix: 'kg'
  },
  legend: {
    cursor: 'pointer'
  },
  data
}

const chart = new CanvasJS.Chart('$chart', options)

chart.render()
*/

new Chart($chart, config)
