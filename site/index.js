/* global Chart, $chart */
import data from './series.js'

const config = {
  type: 'scatter',
  data,
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
