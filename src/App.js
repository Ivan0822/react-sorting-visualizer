import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getBubbleSortAnimations } from './algorithms/bubbleSort';
import { getMergeSortAnimations } from './algorithms/mergeSort';
import { getQuickSortAnimations } from './algorithms/quickSort';
import Body from './components/Body/Body';
import Header from './components/Header/Header';

const App = () => {

  const [array, setArray] = useState([])
  const [speed, setSpeed] = useState(10)
  const [arrayLength, setArrayLength] = useState(80)

  const randomArray = (length, max) => {
    const tmpArray = Array(arrayLength).fill().map(() => Math.round(Math.random() * 550))
    setArray(tmpArray)
  }

  useEffect(() => {
    randomArray()
  }, [])

  const mergeSort = () => {

    const animations = getMergeSortAnimations(array)

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByTagName('section')

      if (animations[i][0] === 'changeColor') {
        const [, barOneIdx, barTwoIdx] = animations[i]
        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style
        setTimeout(() => {
          barOneStyle.backgroundColor = '#F44336'
          barTwoStyle.backgroundColor = '#F44336'
        }, i * speed)
      }
      else if (animations[i][0] === 'revertColor') {
        const [, barOneIdx, barTwoIdx] = animations[i]
        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style
        setTimeout(() => {
          barOneStyle.backgroundColor = '#3356D9'
          barTwoStyle.backgroundColor = '#3356D9'
        }, i * speed)
      }
      else {
        setTimeout(() => {
          const [, barOneIdx, newHeight] = animations[i]
          const barOneStyle = arrayBars[barOneIdx].style
          barOneStyle.height = `${newHeight}px`
        }, i * speed)
      }
    }
  }

  const quickSort = () => {

    const animations = getQuickSortAnimations(array)

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByTagName('section');
      if (animations[i][0] === 'changeColor') {

        const [, barOneIdx, barTwoIdx] = animations[i]
        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style

        setTimeout(() => {
          barOneStyle.backgroundColor = '#F44336'
          barTwoStyle.backgroundColor = '#F44336'
        }, i * speed)
      }
      else if (animations[i][0] === 'revertColor') {
        const [, barOneIdx, barTwoIdx] = animations[i]

        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style

        setTimeout(() => {
          barOneStyle.backgroundColor = '#3356D9'
          barTwoStyle.backgroundColor = '#3356D9'
        }, i * speed)
      }
      else if (animations[i][0] === 'dontSwap') {

        setTimeout(() => {
        }, i * speed)
      }
      else {
        setTimeout(() => {
          const [, barOneIdx, barTwoIdx, newHeightOne, newHeightTwo] = animations[i]

          const barOneStyle = arrayBars[barOneIdx].style
          const barTwoStyle = arrayBars[barTwoIdx].style

          barOneStyle.height = `${newHeightOne}px`
          barTwoStyle.height = `${newHeightTwo}px`
        }, i * speed)
      }
    }
  }

  const bubbleSort = () => {

    const animations = getBubbleSortAnimations(array)

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByTagName('section')

      if (animations[i][0] === 'changeColor') {

        const [, barOneIdx, barTwoIdx] = animations[i]
        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style

        setTimeout(() => {
          barOneStyle.backgroundColor = '#F44336'
          barTwoStyle.backgroundColor = '#F44336'
        }, i * speed)
      }
      else if (animations[i][0] === 'revertColor') {

        const [, barOneIdx, barTwoIdx] = animations[i]
        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style

        setTimeout(() => {
          barOneStyle.backgroundColor = '#3356D9'
          barTwoStyle.backgroundColor = '#3356D9'
        }, i * speed)
      }
      else {
        setTimeout(() => {
          const [, barOneIdx, barTwoIdx, newHeightOne, newHeightTwo] = animations[i];

          const barOneStyle = arrayBars[barOneIdx].style
          const barTwoStyle = arrayBars[barTwoIdx].style

          barOneStyle.height = `${newHeightOne}px`
          barTwoStyle.height = `${newHeightTwo}px`

        }, i * speed)
      }
    }
  }

  return (
    <div className="App">
      <Header
        array={array}
        setArray={setArray}
        randomArray={randomArray}
        mergeSort={mergeSort}
        bubbleSort={bubbleSort}
        quickSort={quickSort}
        setSpeed={setSpeed}
        setArrayLength={setArrayLength}
      />
      <Body array={array} />
    </div >
  );
}

export default App;
