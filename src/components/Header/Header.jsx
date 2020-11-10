import React from 'react'
import { StyledHeader } from './StyledHeader'

const Header = ({ array, mergeSort, bubbleSort, quickSort }) => {
    return (
        <StyledHeader>
            <div>
                <button onClick={() => window.location.reload()}>NEW ARRAY</button>
                <button onClick={() => mergeSort(array)}>MERGE SORT</button>
                <button onClick={() => quickSort(array)}>QUICK SORT</button>
                <button onClick={() => bubbleSort(array)}>BUBBLE SORT</button>
                {/* <button onClick={() => heapSort(array)}>HEAP SORT</button> */}
            </div>
        </StyledHeader >
    )
}

export default Header