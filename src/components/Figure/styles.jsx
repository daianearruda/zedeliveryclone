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

img{
  bottom: 0;
  left: 0;
 position: relative;


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

export const ImgButton = styled.img`
width: 190px;
aspect-ratio: auto 190 / 54;
height: 54px;
margin-right:0.5em;
`