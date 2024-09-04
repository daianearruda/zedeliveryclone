import styled from "styled-components";


export const Main = styled.div`
  margin-top:3.5em;  
  position: relative;
  width: 100vw;

.containerButton{
  position: relative;
  width: 190px;
  height: 54px;
  margin-right:0.5em;

  @media (max-width:768px){
  margin-top:0.5em;
  }
}

.buttons{
display:flex;
  @media (max-width:768px){
  align-items:center;
  justify-content:center;
  flex-direction:column;
  }
}

.content{
  width: 50vw;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  text-align:start;

  @media (max-width:768px){
  margin:0 auto;
  position: relative;
  display:flex;
  flex-direction:column;
  padding-bottom:50px;
  justify-content:center;
  text-align:center;
  width: 80vw;

  }
}

.foto{
  z-index:0;
  position: relative;
}

img{
  bottom: 0;
  left: 0;
 position: relative;
  z-index:1;
}

h2{
margin-bottom:1em;
}

h4{
font-size: 16px;
line-height: 20px;
color: #333;
font-weight:400;
margin-bottom:1em;

@media (max-width:768px){
font-size: 18px;
}
}

`



export const Button = styled.button`
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  aspect-ratio: auto 190 / 54;
  height: 54px;
  cursor: pointer;
  background: none;
  padding: 0;
  z-index:2;
 
  

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

export const ButtonBaixar = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  cursor: pointer;
  z-index: 2;
  text-align: center;
  background-color: #FFC500;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius:10px;
  font-size:16px;
  font-weight:600;
`;