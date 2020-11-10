export const getQuickSortAnimations = (array) => {
    const animations = []
    if (array.length <= 1) return array

    quickSortHelper(array, 0, array.length - 1, animations)
    console.log(animations)
    return animations
}

const quickSortHelper = (array, start, end, animations) => {
    if (start >= end) {
        return
    }

    let index = partition(array, start, end, animations)
    quickSortHelper(array, start, index - 1, animations)
    quickSortHelper(array, index + 1, end, animations)

}

const partition = (array, start, end, animations) => {

    let pivotIndex = start
    let pivotValue = array[end]

    for (let i = start; i < end; i++) {

        animations.push(['changeColor', end, i])
        animations.push(['revertColor', end, i])

        if (array[i] <= pivotValue) {
            swap(array, i, pivotIndex)
            animations.push(['swap', pivotIndex, i, array[pivotIndex], array[i]])
            pivotIndex++
        }
        else {
            animations.push(['swap', pivotIndex, i, array[pivotIndex], array[i]])
        }
    }
    swap(array, pivotIndex, end);
    animations.push(['swapPivot', pivotIndex, end, array[pivotIndex], array[end]])

    return pivotIndex;
}

const swap = (array, a, b) => {
    let temp = array[a]
    array[a] = array[b]
    array[b] = temp
}