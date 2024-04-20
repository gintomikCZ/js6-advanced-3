const dt = new Date('2024-04-17') // 'YYYY-MM-DD'
// new Date(Ynum, Mnum, Dnum)

// 'YYYYdelimiterMMdelimiterDD'
// 'YYYYdelimiter1MMdelimiter2DD'
// 'DD-MM-YYYY', format jako druhý argument funkce


export const getDateFromString = (str) => { // ('2024-10-20' ... '2024/12/12' .... '2022.02.02')
  // split pomocí delimiteru - array
  // delimiter je první znak v str, který není číslo
  // nejdřív str splitovat, potom na něj pustit nějakou array method (some ??)
  // const splited = str.split('')
  // const delimiter = splited.find((character) => {
  //   return !/[0-9]/.test(character)
  // })
  // const ar = str.split(delimiter)
  const delimiter = str.replace(/[0-9]/g, '')[0]
  const ar = str.split(delimiter)
  return new Date(+ ar[0], (+ ar[1]) - 1, + ar[2])
}

export const getDateFromStringVariousDelimiters = (str) => { // ('2024-10.20', '2024/1-2')
  const dateString = str.replace(/[^0-9]/g, '/')
  return new Date(dateString)
}

export const getDateFromStringAnyFormat = (str, format) => { // ('7.4. 2024', 'D.M. YYYY')
  let day = ''
  let month = ''
  let year = ''
  for (let i = 0; i < str.length; i++) {
    if (format[i] === 'D') {
      day += str[i]
    }
    if (format[i] === 'M') {
      month += str[i]
    }
    if (format[i] === 'Y') {
      year += str[i]
    }
  }
  return new Date(+ year, (+ month) - 1, + day)
}

// new Date (string) - caveats ????
// new Date ('yyyy/mm/dd')
// new Date (y, m, d)
