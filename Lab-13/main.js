

let sum = (first, second) => {
    let arr = [];
    let arrLength = second - first;
    for(let i = 0; i < arrLength; i++) {
        arr.push(first++)
    }
    return arr.reduce((acc, val) => acc + val, first)
}