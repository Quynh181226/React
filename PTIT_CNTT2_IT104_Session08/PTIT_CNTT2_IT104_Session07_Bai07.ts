function flatten<T>(arr: T[][]):T[]{
    return arr.flat()
}

console.log(flatten([[1, 2], [3, 4], [5, 6]]))