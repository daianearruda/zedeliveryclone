import styled from "styled-components"

export const Seta = styled.li`
list-style:none;
position:absolute;
border:none;
z-index: 10; 
margin:5em 2em;
cursor:pointer;

img{
height:20px;
}
`

export const LoginCard = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:1.5em;
text-align:center;

h4{
margin-bottom:1em;
}

.cardLogin{
width:320px;


hr {
    margin:0  0.5em;
    width: 100%;
    height: 1px;
    border: none; 
    background-color: rgb(90,90,90); 
}

.hr{
display:flex;
align-items:center;
margin:1.5em 0;
}

.botao{
height:46px;
margin-bottom:1em;
border-radius:20px;
border:none;
cursor:pointer;
}

img{
width:175px;
heigth:56px;
margin-bottom:1em;
}

input,button{
display:block;
width:100%;
}

input{
padding:1em;
height:46px;
margin:1.5em 0;
border-radius:10px;
border:1px solid gray;
}

.email p {
    text-align: start; /* Alinha o texto à esquerda */
}

.facebook{
background-color: rgb(52, 88, 164);
color:white
}
.apple{
background-color: black;
color:white
}
.amarelo{
background-color: rgb(255, 197, 0);
color:black;
}

span{
color: rgb(243, 144, 0);
font-weight: 500;
cursor:pointer;
}

`

export const Footer = styled.footer`
color:gray;
text-align:center;
display:flex;
flex-direction:column;
align-items:center;
margin-top: auto;
font-size:12px;

hr{
width: 100%;
height: 1px;
border: none; 
background-color: gray;
margin-bottom:1em; 
}


div{
display:flex;
color:black;
cursor:pointer;
}

p{
margin:0.5em;
}

.infos {

max-width:508px;
  margin-bottom: 1em;
}

`