export const getBubbleSortAnimations = (array) => {
    const animations = []
    if (array.length <= 1) return array;

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {

            animations.push(['changeColor', j, j + 1])
            animations.push(['revertColor', j, j + 1])

            if (array[j] > array[j + 1]) {
                let tmp = array[j + 1]
                array[j + 1] = array[j]
                array[j] = tmp
                animations.push(['swap', j, j + 1, array[j], array[j + 1]])
            }
            else {
                animations.push(['swap', j, j + 1, array[j], array[j + 1]])
            }
        }
    }
    return animations
}