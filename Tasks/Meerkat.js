function fixTheMeerkat(arr) {
    let start = arr.pop();
    let finish = arr.shift();

    arr.push(finish);
    arr.unshift(start);

    return arr
}