import styled from "styled-components";

export const Contents = styled.div`
display:flex;
margin: 48px 0;
justify-content:space-between;

@media (max-width:768px){
display:none;
}
`

export const Contents2 = styled.div`
display:none;

@media (max-width:768px){
display:flex;

p{
text-align:center;
margin:0 auto;
margin-bottom:4em;
width:300px;
}

.swiper-button-next, .swiper-button-prev {
  color: black; 
}


.swiper-pagination-bullet {
  background-color: gray;
  height:20px;
  width:20px;
}

.swiper-pagination-bullet-active {
  background-color:  rgb(243, 144, 0);

}


}
`

export const ImgBrahma= styled.div`
display:none;
@media (max-width: 700px) {
    display:flex;
    margin:0 auto;
    width: 100%;
    height: 315px;
    max-width: 280px;
    cursor:pointer;
}
`

export const Main = styled.div`
text-align:center;
width:100%;


h2{
font-family: Roboto;
font-size: 24px;
margin-bottom: 48px;
font-weight: 500;

@media (max-width:700px){
margin: 48px;
}
}

h3{
font-size: 18px;
line-height: 24px;
color: #333;
font-weight: 400;
}

p{
color: #666;
font-size: 16px;
line-height: 32px;
text-align: center;
font-weight: 400;
margin-top:1em;
}
`

export const Item = styled.div`
width:288px;

`