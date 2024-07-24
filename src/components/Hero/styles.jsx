import styled from "styled-components"
import localizacao from '../../assets/localizacao.png'

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
    }
`

export const StyledInput = styled.input`
  width: 100%;
  margin-top:1em;
  padding: 10px 10px 10px 40px; /* Espaço para a imagem */
  background: url(${localizacao}) no-repeat 10px center, white; /* Fundo branco e imagem */
  background-size: 20px 20px; /* Tamanho da imagem */
  background-color: white; /* Garante fundo branco */
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
`;