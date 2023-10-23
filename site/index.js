/* global d3 */
import data from './series.js'

// set the dimensions and margins of the graph
const margin = { top: 10, right: 30, bottom: 30, left: 60 }
const width = 460 - margin.left - margin.right
const height = 400 - margin.top - margin.bottom

// append the svg object to the body of the page
const svg = d3.select('#chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform',
    'translate(' + margin.left + ',' + margin.top + ')')

// Read the data
// d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv", function(data) {
console.log(data)

const xMin = Math.min(...data.map(d => d.x))
const xMax = Math.max(...data.map(d => d.x))
const yMin = Math.min(...data.map(d => d.y))
const yMax = Math.max(...data.map(d => d.y))

// Add X axis
const x = d3.scaleLog()
  .domain([xMin, xMax])
  .range([0, width])
svg.append('g')
  .attr('transform', 'translate(0,' + height + ')')
  .call(d3.axisBottom(x))

// Add Y axis
const y = d3.scaleLog()
  .domain([yMin, yMax])
  .range([height, 0])
svg.append('g')
  .call(d3.axisLeft(y))

// Add dots
svg.append('g')
  .selectAll('dot')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', function (d) { return x(d.x) })
  .attr('cy', function (d) { return y(d.y) })
  .attr('r', 1.5)
  .style('fill', '#69b3a2')

// })
/*

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
*/
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

// new Chart($chart, config)
