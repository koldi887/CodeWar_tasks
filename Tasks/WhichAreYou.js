function inArray(array1,array2){
    let arr = []
    for (let i = 0; i < array1.length; i++) {
        for (let k = 0; k < array2.length; k++) {
            if (array2[k].includes(array1[i]) && !arr.includes(array1[i])) {
                arr.push(array1[i])
            }
        }
    }

    return arr.sort((a, b) => a > b ? 1 : -1)
}