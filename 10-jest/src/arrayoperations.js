export const sumaArray = (arr) => {
    if (!arr || arr.length === 0) return 0
    return arr.reduce(
        (acc, curr) => typeof (curr) === "number" ? curr + acc : acc,
        0
    )
}