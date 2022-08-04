import styled from "styled-components";

export const ButtonCard = styled.button`
    background-color: ${(props) => props.color || 'blue'};
    color: white;
    border: none;
    border-radius: 2px;
    padding: 7px;
    position: absolute;
    right: 0;
    bottom: -13px;
    z-index: 10;
    cursor: pointer;
    transition: 400ms ease;
    
    :hover{
        transform: scale(1.08);
    }
`