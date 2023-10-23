import fs from 'fs'
import { parse } from 'csv-parse/sync'
// import { pp } from 'passprint'

const csv = fs.readFileSync('data.csv', 'utf8')
const rows = parse(csv, { columns: true })

const massColumns = [
  'Normal Objects',
  'Quantum Particles',
  'Black Holes',
  'Extremes'
]

const data = []

for (const row of rows) {
  const x = Number(row['Radius (m)'])
  for (const column of massColumns) {
    if (row[column]) {
      const y = Number(row[column])
      data.push(`{radius:${x},mass:${y}}`)
      break
    }
  }
}

console.log(`export default [${data.join(',')}]`)
