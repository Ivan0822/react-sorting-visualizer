import styled from 'styled-components'

export const StyledHeader = styled.header`
    height: 100px;
    width: 100%;
    top: 0;
    position: absolute;
    background-color: #191D37;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        margin-left: 10rem;
        margin-right: 10rem;
    }
    button {
        margin-left: 1rem;
        margin-right: 1rem;
        background-color: #59AEE2;
        border: none;
        border-radius: 10px;
        height: 35px;
        font-weight: 700;
        color: white;
    }

    button:hover {
        background-color: white;
        color: #191D37;
    }

    @media screen and (max-width: 600px){
        div {
            display: flex;
        }
        button{
            width: 5rem;
            height: 3rem;
        }
    }
`