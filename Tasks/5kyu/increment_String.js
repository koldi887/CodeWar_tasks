function incrementString(string) {
    const body = string.slice(0, -1);
    const lastDigit = string[string.length - 1].match(/[0-9]/);
    return lastDigit === null
        ? string + '1'
        : lastDigit !== 9
            ? body + (+lastDigit + 1)
            : incrementString(body) + "0"
}

console.log(incrementString("dd001"))