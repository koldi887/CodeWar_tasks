function multipleOfIndex(array) {
    let res = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % i === 0) {
            res.push(array[i]);
        }
    }

    return res;
}