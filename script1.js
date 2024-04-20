/*
- sets
- date from any string, any format
- maps
- normalizace
- countries by continent, language, etc.
- bubble sort
- NodeJS API (tomorrow ??)
*/

// import { getDateFromStringAnyFormat } from './dateUtils.js'

// console.log(getDateFromStringAnyFormat('2024 10/04', 'YYYY MM/DD'))

const person = {
  first: 'Karel',
  last: 'Houska'
}


const ar = [
  8,
  2,
  {
    first: 'Karel',
    last: 'Houska'
  },
  {
    first: 'Karel',
    last: 'Houska'
  }
]

const mySet = new Set(ar)

mySet.forEach((element, key, set) => {
  console.log(element)
  console.log(key)
  console.log(set)
})


// funkce , která bude brát pole jako argument a vrátí true, pokud pole obsahuje unikátní hodnoty, jinak false

const hasUniqueItems = (ar) => {
  const mySet = new Set(ar)
  return ar.length === mySet.size
}
console.log(hasUniqueItems(['banán', 'hruška', 'banán']))



const employees = [
  { first: 'Karel', last: 'Houska', position: 'manager' },
  { first: 'Karel', last: 'Rohlík', position: 'manager' }
]

const getIsUnique = (ar) => {
  const mySet = new Set(ar.map(obj => JSON.stringify(obj)))
  return ar.length === mySet.size
}

console.log(getIsUnique(employees))
