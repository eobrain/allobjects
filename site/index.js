/* global Chart, $chart */
import data from './series.js'

const ticks = {
  callback: (value, index, ticks) => value.toPrecision(1)
}

const config = {
  type: 'scatter',
  data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'All Objects'
      }
    },
    scales: {
      x: {
        type: 'logarithmic',
        position: 'bottom',
        ticks
      },
      y: {
        type: 'logarithmic',
        position: 'left',
        ticks
      }
    }
  }
}

/*

const options = {
  axisX: {
    title: 'Radius',
    suffix: 'm'
  },
  axisY: {
    title: 'Mass',
    suffix: 'kg'
  },
}

const chart = new CanvasJS.Chart('$chart', options)

chart.render()
*/

new Chart($chart, config)
