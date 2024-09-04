import styled from "styled-components"

export const Img = styled.img`
height:82px;
width:100%;
border-radius:12px;
cursor:pointer;
`

export const Lista =styled.ul`
max-width:100%;
margin:0 auto;
padding:4em 0em;
display:grid;
grid-template-columns: repeat(7, 1fr);
list-style:none;
text-align:center;

 @media (max-width: 768px) {
    overflow-x: auto;
     width: 98%;
 
}
`

export const Item = styled.li`
margin:0.5em;

`