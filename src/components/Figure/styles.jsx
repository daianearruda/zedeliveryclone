import styled from "styled-components";


export const Main = styled.div`
  margin-top:3.5em;  
  position: relative;
  width: 100vw;


.content{
  width: 50vw;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  text-align:start;
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
}

`



export const Button = styled.button`
position:relative;
  width: 190px;
  border: none;
  aspect-ratio: auto 190 / 54;
  height: 54px;
  margin-right: 0.5em;
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