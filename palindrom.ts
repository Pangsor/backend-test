const splitTheString = (value:string): string[] => {
    return value.split('')
}

const reverseTheString = (value: string[]): string[] => {
    return value.reverse()
}

const joinTheString = (value: string[]): string => {
    return value.join('')
}

const isPalindrom = (value: string): boolean => {
    value = value.replace(/\s+/g, '');
    const splitString = splitTheString(value)
    const reversedString = reverseTheString(splitString)
    const joinedString = joinTheString(reversedString)
    const result = joinedString === value
    return result
}

const isPalindromSimple = (value: string): boolean => {
    value = value.replace(/\s+/g, '');
    return value.split('').reverse().join('') === value
}

const answer = isPalindrom("dad")
const simpleAnswer = isPalindromSimple("dad")
console.log(answer)
console.log(simpleAnswer)
