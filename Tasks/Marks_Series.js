function remove (string) {
    let arr =[]

    for (let i = string.length-1; i => 0; i--){
        if(string[i] != '!'){
            arr.push(string.slice(0,i+1));
            return arr.join('');
        }
    }

    return '';
}