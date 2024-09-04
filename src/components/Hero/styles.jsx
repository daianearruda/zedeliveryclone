import styled from "styled-components"
import localizacao from '../../assets/localizacao.png'
import gps from '../../assets/gps.png'
import seta from '../../assets/seta.png'

export const HeroDiv = styled.div`
    background-color: rgb(255, 204, 0);
    width:100%;
    height:464px;
    display:flex;
    justify-content:center;
    padding-top:4.5em;

    h1{
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: rgb(51, 51, 51);
    font-weight: 400;
    }


    .conteudoCentral{
    width:592px;
        @media (max-width: 768px) {
    width:70%;
    font-weight: 600;
}
    }

    .background{
        background-color: rgba(0, 0, 0, 0.85);
    }


`

export const StyledInput = styled.input`
  width: 100%;
  height:48px;
  margin-top:1em;
  padding: 10px 10px 10px 50px; 
  background: url(${localizacao}) no-repeat 15px center, white; 
  background-size: 25px 25px;
  background-color: white; 
  border: 1px solid gray;
  border-radius: 8px;
  font-size: 16px;
  outline: none; 

  &.destacar{
  position:relative;
  z-index:1001;
  background: url(${seta}) no-repeat 15px center, white;
  cursor:pointer;
  }

    &.top0 {
        margin-top: -1px;
        background: url(${gps}) no-repeat 15px center, white;
        cursor:pointer;
       
        &::placeholder {
            color: rgb(243, 144, 0);
}
}

@media (max-width: 768px) {
margin-top:2em;
}
`;