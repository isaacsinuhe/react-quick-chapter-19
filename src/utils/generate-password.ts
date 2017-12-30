const SPECIALS = '!@#$%^&*()_+{}:"<>?\|[]\',./`~'
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBERS = '0123456789'
const ALL = `${SPECIALS}${LOWERCASE}${UPPERCASE}${NUMBERS}`

// adding +1 to avoid 0 as a value in case we want to use it differently than the index.
const getIterable = (length: number) => Array.from({ length }, (_, index) => index + 1)

type PickType <T> = { (set: string, min: T, max: T | undefined): string }
const pick: PickType <number> = (set, min, max) => {
    let length = min

    if (typeof max !== 'undefined') {
        length += Math.floor(Math.random() * (max - min))
    }

    // creating an iterable element with empty strings to avoid for and while loops
    // and using a more declarative approach.

    return getIterable(length).map(() => (
        set.charAt(Math.floor(Math.random() * set.length))
    )).join('');
}

type ShuffleType = {(set: string): string}
const shuffle: ShuffleType = (set) => {
    let array = set.split('')
    let length = array.length
    // we reverse the iterable to get value from max to min.
    let iterable = getIterable(length).reverse()

    let shuffled = iterable.reduce(
        (acc, value, index) => {
            let randomIndex = Math.floor(Math.random() * value);
            [acc[value - 1], acc[randomIndex]] = [acc[randomIndex], acc[value - 1]]

            return acc
        // tslint:disable-next-line:align
        }, [...array])

    return shuffled.join('')
}

export default () => {
    let password = (
        pick(SPECIALS, 1, undefined)
        + pick(LOWERCASE, 1, undefined)
        + pick(NUMBERS, 1, undefined)
        + pick(UPPERCASE, 1, undefined)
        + pick(ALL, 4, 12)
    )

    return shuffle(password)
}
