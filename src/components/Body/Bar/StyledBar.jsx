import styled from 'styled-components'

export const StyledBar = styled.section`
    background-color: #3356D9;
    width: 10px;
    height: ${props => props.valueHeight}px;
    margin: 0 2px;
    display: inline-block;

    @media screen and (max-width: 600px){
    height: ${props => props.valueHeight}px;
    width: 5px;
    margin: 0 1px;
    }
`