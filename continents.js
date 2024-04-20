const continents = {
  AF: "Africa",
  AN: "Antarctica",
  "AS": "Asia",
  "EU": "Europe",
  "NA": "North America",
  "OC": "Oceania",
  "SA": "South America"
}

export const getContinents = function () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(continents)
    }, 100)
  })
}