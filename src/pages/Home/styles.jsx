import styled from "styled-components"


export const ModalBackground = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:990;
`;

export const ModalContent=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:white;
width:375px;
height:260px;
border-radius:12px;
text-align:center;
position:fixed;
z-index:9999;


img{
height:88px;
margin-top:1em;
}

h2{
margin-top:1em;
font-size:24px;
font-weight:600;
}

button{
margin:1.5em 0.5em;
width:144px;
height:46px;
border-radius:25px;
border:1px solid;
}

button.sim {
background-color: rgb(249, 193, 4);
border:none;
&:hover{
    background-color: rgb(230, 191, 2);
    border:none;
}
}

button.nao {
&:hover{
    background-color: rgb(249, 193, 4);
    border:none;
}
}

button.voltar{
width:80%;
}

p{
padding-top:0.5em;
font-size:16px;
}

`

