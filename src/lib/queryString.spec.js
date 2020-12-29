const { queryString } = require('./queryString')

describe('Object to query string', () => {
    it('should create a valid query string when a object is provided', () => {
        const obj = {
            name: 'Henrique',
            profession: 'developer',
        }

        expect(queryString(obj)).toBe('name=Henrique&profession=developer')
    })

    it('should create a valid query string even when an array is passed as value', () => {
        const obj = {
            name: 'Henrique',
            profession: 'developer',
            abilitites: ['JS', 'TDD'],
        }

        expect(queryString(obj)).toBe(
            'name=Henrique&profession=developer&abilitites=JS,TDD'
        )
    })

    it('should throw an error when an object is passed as value', () => {
        const obj = {
            name: 'Henrique',
            profession: 'developer',
            abilitites: {
                first: 'JS',
                second: 'TDD',
            },
        }

        expect(() => {
            queryString(obj)
        }).toThrowError()
    })
})

// describe('Query string to object', () => {
// })
