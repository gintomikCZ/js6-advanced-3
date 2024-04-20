// připravit vhodnou dat. strukturu pro zobrazení kontinentů a seznamu zemí v každém z nich

/*

first version
{
  'EU': {
    continent: 'Europe',
    countries: {
      AD: {
        country: 'Andorra'
      },
      HU: {
        country: 'Hungary'
      }
    }
  }
}

second
{
  'EU': {
    continent: 'Europe',
    countries: [
      {
        id: 'AD'
        country: 'Andorra'
      },
      {
        id: 'HU'
        country: 'Hungary'
      }
    ]
  }
}
*/


import { getContinents } from './continents.js'
import { getCountries } from './countries.js'

const normalizeContinents1 = () => {
  return Promise.all([getContinents(), getCountries()]).then(data => { //[continents, countries]
    const result = {}
    Object.keys(data[0]).forEach(continentKey => {
      result[continentKey] = {
        continent: data[0][continentKey],
        countries: {}
      }
    })
    Object.keys(data[1]).forEach(countryKey => {
      result[data[1][countryKey].continent].countries[countryKey] = data[1][countryKey]
    })
    return result
  })
}

const normalizeContinents2 = () => {
  return Promise.all([getContinents(), getCountries()]).then(data => { //[continents, countries]
    const result = {}
    Object.keys(data[0]).forEach(continentKey => {
      result[continentKey] = {
        continent: data[0][continentKey],
        countries: []
      }
    })
    Object.keys(data[1]).forEach(countryKey => {
      result[data[1][countryKey].continent].countries.push(Object.assign({ id: countryKey }, data[1][countryKey]))
    })
    return result
  })
}

normalizeContinents2().then(cosi => { console.log(cosi) })

// await Promise.all([getContinents(), getCountries()])
