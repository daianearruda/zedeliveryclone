import styled from "styled-components";


export const HeaderBar = styled.header`
    height: 72px;
    background-color: black;
`

export const DivHeader= styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Img = styled.img`
    height: 40px;
    width: 121px;
`

export const Button = styled.button`
    background-color:#ffcc00;
    font-size: 14px;
    width: 150px;
    height: 48px;
    font-weight: 700;
    line-height: 20px;
    border:none;
    border-radius: 24px;
    cursor:pointer;

    &:hover{
    background-color:rgb(255, 224, 102);
    }
`