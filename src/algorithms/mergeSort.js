export const getMergeSortAnimations = (array) => {
    const animations = []
    if (array.length <= 1) return array
    const auxiliaryArray = [...array]
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations)
    return animations
}

const mergeSortHelper = (
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) => {
    if (startIdx === endIdx) return
    const middleIdx = Math.floor((startIdx + endIdx) / 2)
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations)
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations)
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations)
}

const doMerge = (
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
) => {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        animations.push(['changeColor', i, j])
        animations.push(['revertColor', i, j])
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push(['overwrite', k, auxiliaryArray[i]])
            mainArray[k++] = auxiliaryArray[i++]
        } else {
            animations.push(['overwrite', k, auxiliaryArray[j]])
            mainArray[k++] = auxiliaryArray[j++]
        }
    }
    while (i <= middleIdx) {
        animations.push(['changeColor', i, i])
        animations.push(['revertColor', i, i])
        animations.push(['overwrite', k, auxiliaryArray[i]])
        mainArray[k++] = auxiliaryArray[i++]
    }
    while (j <= endIdx) {

        animations.push(['changeColor', j, j])
        animations.push(['revertColor', j, j])
        animations.push(['overwrite', k, auxiliaryArray[j]])
        mainArray[k++] = auxiliaryArray[j++]
    }
}