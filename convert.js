import fs from 'fs'
import { parse } from 'csv-parse/sync'
// import { pp } from 'passprint'

const data = fs.readFileSync('data.csv', 'utf8')
const rows = parse(data, { columns: true })

const normal = { name: 'Normal Objects', data: [] }
const quantum = { name: 'Quantum Particles', data: [] }
const blackHole = { name: 'Black Holes', data: [] }
const extreme = { name: 'Extremes', data: [] }
const seriesList = [normal, quantum, blackHole, extreme]

for (const row of rows) {
  const x = Number(row['Radius (m)'])
  for (const series of seriesList) {
    if (row[series.name]) {
      const y = Number(row[series.name])
      series.data.push([x, y])
    }
  }
}

const javascript = seriesList.map(s => `{name:'${s.name}',data:${JSON.stringify(s.data)}}`)

console.log(`export default [${javascript.join(',')}]`)
