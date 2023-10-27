/* global ApexCharts, $chart */
import series from './series.js'

const logarithmic = true
const type = 'numeric'

const options = {
  chart: {
    // height: 350,
    type: 'scatter'
    // zoom: {
    //  enabled: true,
    //  type: 'xy'
    // }
  },
  series,
  xaxis: { logarithmic, type },
  yaxis: { logarithmic },
  dataLabels: {
    enabled: true,
  },
}

const chart = new ApexCharts($chart, options)

chart.render()
