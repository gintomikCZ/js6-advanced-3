const btn = document.querySelector('button')
btn.addEventListener('click', () => {
  document.querySelector('p').innerHTML = document.querySelector('input').value
})

  // < img src = "nonsens" onerror = "alert('haha')" >

// denial of service
// cross site scripting (XSS)

// List = Array
// Dictionary = Object

// LIFO (Last In First Out)
// FIFO (first in first out)

// tree structure (NoSQL)
[
  {
    company: 'XY',
    city: 'Brno',
    employees: [
      { first: 'Karel', position: 'manager' }
    ],
  },
  {
    company: 'AB',
    city: 'Brno',
    employees: [
      { first: 'Jenda', position: 'manager' }
    ]
  }
]

// rows structure (SQL)


[
  {company: 'XY', city: 'Brno', id: 1}
]

[
  { first: 'Karel', position: 'manager', companyid: 1 },
  { first: 'Jenda', position: 'manager', companyid: 2 },
]
