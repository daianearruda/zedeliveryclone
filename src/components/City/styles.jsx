import styled from "styled-components";

export const Main = styled.div`
text-align:center;
background-color: rgb(246, 246, 246);
padding: 2em 0;


h2{
font-family: Roboto;
font-size: 24px;
margin-bottom: 48px;
font-weight: 500;
}
`
export const Lista = styled.ul`
font-size: 16px;
width:85%;
margin: 0 auto;   
display:grid;
grid-template-columns: repeat(auto-fit, minmax(189px, 1fr));
row-gap: 8px;
grid-auto-rows: 40px;
list-style:none;
align-items: center;

li{
cursor:pointer;
    
 &:hover{
    font-weight: 700;
    } 
}

 @media (max-width:768px){
    grid-template-columns: repeat(3, 1fr);
    color: gray;

    li{
        &:hover{
        color: black;
        font-weight: 500;
       } 
    }
    }
`
