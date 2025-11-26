// JSON

/*
ARQUIVO JSON

[
    {
        "company": "Big Corporation",
        "employees": 10000,
        "ceo": "John",
        "firedEmployees": null
    },

    {
        "company": "Small Corporation",
        "employees": 500,
        "ceo": null,
        "firedEmployees": 100
    }
]
*/

let companies = `[
    {
        "company": "Big Corporation",
        "employees": 10000,
        "ceo": "John",
        "firedEmployees": null
    },

    {
        "company": "Small Corporation",
        "employees": 500,
        "ceo": null,
        "firedEmployees": 100
    }
]`

let x = JSON.parse(companies)

console.log(x[0].company)
console.log(x)