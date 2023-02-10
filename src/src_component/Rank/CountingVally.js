
const vally = (steps, path) => {
    let level = 0
    let valleys = 0
    for (let i = 0; i < path.length; i++) {
        if (path[i] === "D") {
            level--
        }
        if (path[i] === "U") {
            level++
        }
        if (path[i] === "D" && level === 0){
            valleys ++
        }
    }
    return valleys;
}
const output = vally(8, "UDDDUDUU")
console.log(output, "output")
