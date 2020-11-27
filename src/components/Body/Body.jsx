import React from 'react'
import Bar from './Bar/Bar'
import { StyledBody } from './StyledBody'
import { v4 as uuidv4 } from 'uuid'

const Body = ({ array }) => {

    return (
        <StyledBody>
            {array.map(el => <Bar key={uuidv4()} value={el}></Bar>)}
        </StyledBody>
    )
}

export default Body