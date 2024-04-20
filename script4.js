// normalizace

const companies = [
  { id: 1, company: 'XY', city: 'Brno' },
  { id: 2, company: 'AB', city: 'Praha' },
]

const companiesNormalized = {
  1: {
    company: 'XY',
    city: 'Brno'
  },
  2: {
    company: 'AB',
    city: 'Praha'
  }
}

const normalize = (arr) => { // arr je pole objektů a každý objekt má vlastnost id
  const normalized = {}
  companies.forEach(company => {
    const id = company.id
    delete company.id
    normalized[id] = company
  })
  return normalized
}

console.log(normalize(companies))