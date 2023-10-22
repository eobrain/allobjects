import fs from 'fs'
import { parse } from 'csv-parse/sync'
// import { pp } from 'passprint'

const data = fs.readFileSync('data.csv', 'utf8')
const rows = parse(data, { columns: true })

const normal = { name: 'Normal Objects', dataPoints: [] }
const quantum = { name: 'Quantum Particles', dataPoints: [] }
const blackHole = { name: 'Black Holes', dataPoints: [] }
const extreme = { name: 'Extremes', dataPoints: [] }
const seriesList = [normal, quantum, blackHole, extreme]

for (const row of rows) {
  const x = Number(row['Radius (m)'])
  for (const series of seriesList) {
    if (row[series.name]) {
      const y = Number(row[series.name])
      series.dataPoints.push(`{x:${x},y:${y}}`)
    }
  }
}

const javascript = seriesList.map(s =>
    `{type:'scatter', name:'${s.name}',dataPoints:[${s.dataPoints.join(',')}]}`
)

console.log(`export default [${javascript.join(',')}]`)
