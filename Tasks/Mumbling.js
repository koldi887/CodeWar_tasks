function accum(s) {
    const result = []
    const lowerStr = s.toLowerCase()

    for(let i = 0; i < lowerStr.length; i++) {
        let str = lowerStr[i].toUpperCase()
        for(let k = 0; k < i; k++) {
            str += lowerStr[i]
        }
        result.push(str)
    }

    return result.join("-")
}