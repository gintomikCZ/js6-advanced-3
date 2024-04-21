import { getContinents } from './continents.js'
import { getCountries } from './countries.js'

const countries = await getCountries()
const continents = await getContinents()

const result = new Map()

for (let continentKey in continents) {
  const mapKey = {
    short: continentKey,
    continent: continents[continentKey]
  }
  const mapValue = Object.keys(countries).filter(countryKey => {
    return countries[countryKey].continent === continentKey
  }).map(filteredCountryKey => {
    return countries[filteredCountryKey]
  })
  result.set(mapKey, mapValue)
}

result.forEach((value, key) => {
  console.log('key is: ', key)
  console.log('value is: ', value)
})