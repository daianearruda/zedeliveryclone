import styled from "styled-components"

export const HeroDiv = styled.div`
    background-color: rgb(255, 204, 0);
    width:100%;
    height:464px;
    display:flex;
    justify-content:center;
    padding-top:3.5em;

    h1{
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: rgb(51, 51, 51);
    font-weight: 400;
    }


    .conteudoCentral{
    width:592px;

    input{
    margin-top:1.5em;
    padding:1em;
    height:48px;
    width:100%;
    border:1px solid gray;
    border-radius:6px;
    }
    }
`