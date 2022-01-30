function abbrevName(name){
    const arr = name.split(' ')

    return arr[0].charAt(0).toUpperCase() + '.' + arr[1].charAt(0).toUpperCase()

}