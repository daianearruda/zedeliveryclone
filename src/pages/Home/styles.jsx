import styled from "styled-components"


export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
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
}

`

