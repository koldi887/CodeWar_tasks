function countSheeps(arrayOfSheep) {

    let counter = 0

    arrayOfSheep.forEach(sheep => {
        if(sheep) counter++
    })

    return counter
}