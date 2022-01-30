var moveZeros = function (arr) {
    const zeros = arr.filter((item) => item === 0)
    const result = arr.filter((item) => item !== 0);

    return result.concat(zeros)
}