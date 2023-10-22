/* global CanvasJS */
import data from './series.js'

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
