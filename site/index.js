/* global CanvasJS */
import data from './series.js'

const xMin = Math.min(...data.map(s => Math.min(...s.dataPoints.map(p => p.x))))
const xMax = Math.max(...data.map(s => Math.max(...s.dataPoints.map(p => p.x))))
const yMin = Math.min(...data.map(s => Math.min(...s.dataPoints.map(p => p.y))))
const yMax = Math.max(...data.map(s => Math.max(...s.dataPoints.map(p => p.y))))

const logarithmic = true

const options = {
  // animationEnabled: true,
  title: {
    text: 'All Objects'
  },
  axisX: {
    logarithmic,
    title: 'Radius',
    suffix: 'm',
    minimum: xMin,
    maximum: xMax,
    interval: xMax / 100.0

  },
  axisY: {
    logarithmic,
    title: 'Mass',
    suffix: 'kg',
    minimum: yMin,
    maximum: yMax,
    interval: yMax / 100.0
  },
  legend: {
    cursor: 'pointer'
  },
  data
}

const chart = new CanvasJS.Chart('$chart', options)

chart.render()
