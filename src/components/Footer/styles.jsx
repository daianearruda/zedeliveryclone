import styled from "styled-components"



export const FooterCard = styled.footer`
    height: 314px;
    background-color: rgb(51, 51, 51);
    color: rgb(255, 255, 255);
    margin-top: auto;
    list-style:none;

    h3{
    margin-bottom:0.5em;
    }
    
   .container {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   }

    img{
    height:32px;
    }

    .logo{
     height:56px;
     width:176px;
    }

    .links{
    display:flex;
    flex-direction:column;
    }

    .infos{
    text-align:center;
    width:512px;
    font-size:12px;
    }

    .textoFinal{
    font-size:14px;
    display:flex;

    li{
    margin-right:3em;
    cursor:pointer;
    &:hover{
    font-weight: 700;
     }
    }

     p{
    margin-right:3em;
    }
    }

    .moderacao{
    font-size:12px;
    }

   .socialLinks{
   display:flex;

      li {
        cursor: pointer;
        margin-right: 0.5em;

        &:hover {
            color: rgb(255, 224, 102);
        }
    }
   }

`

export const Link = styled.li`
list-style: none;
margin-bottom:0.5em;
cursor:pointer;

&:hover{
font-weight: 700;
}
`

export const Button= styled.button`
    background-color: rgb(68, 68, 68);
    color: white;
    margin-top:0.5em;
    padding:0.5em 1em;
    border:none;
    border-radius:5px;
    cursor:pointer;

    &:hover{
    background-color: rgb(90, 90, 90);
    }
`