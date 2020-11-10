import React from 'react'
import Bar from './Bar/Bar'
import { StyledBody } from './StyledBody'

const Body = ({ array }) => {

    return (
        <StyledBody>
            {array.map(el => <Bar value={el}></Bar>)}
        </StyledBody>
    )
}

export default Body