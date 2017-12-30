// For older version of Jest, turn automocking off by uncommenting the next line
// jest.dontMock('../js/generate-password.js')
import generatePassword from './generate-password'
const pattern = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\\|\[\]\/'\,\.\`\~]{8,16}$/

describe('method generatePassword', () => {

    let password: string,
        password2: string

    it('returns a generated password of the set pattern', () => {
        password = generatePassword()
        expect(password).toMatch(pattern)
    })

    it('return a new value different from the previous one', () => {
        password2 = generatePassword()
        expect(password2).toMatch(pattern)
        expect(password2).not.toEqual(password)
    })
})
