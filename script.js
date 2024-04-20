//


/*
language | number of countries | countries
English | 80 | USA, England, ....
*/

/*

{
  'en': {
    language: 'English',
    countries: ['USA', 'England', 'Scotland' ....]
  }
}


*/

import { getLanguages } from './languages.js'
import { getCountries } from './countries.js'

// const getLanguagesData = async () => {
//   const data = await Promise.all([getLanguages(), getCountries()])
//   const result = {}
//   Object.keys(data[0]).forEach(languageKey => {
//     result[languageKey] = {
//       language: data[0][languageKey].name,
//       countries: Object.keys(data[1])
//         .filter(countryKey => data[1][countryKey].languages.indexOf(languageKey) > -1)
//         .map(short => data[1][short].name)
//     }
//   })
//   return result
// }

const getLanguagesData = async () => {
  const data = await Promise.all([getLanguages(), getCountries()])
  const result = {}
  // for (let languageKey in data[0])
  Object.keys(data[0]).forEach(languageKey => {
    result[languageKey] = {
      language: data[0][languageKey].name,
      countries: []
    }
  })
  Object.keys(data[1]).forEach(countryKey => {
    data[1][countryKey].languages.forEach(languageKey => {
      result[languageKey].countries.push(data[1][countryKey].name)
    })
  })
  return result
}


const result = await getLanguagesData()
console.log(result)