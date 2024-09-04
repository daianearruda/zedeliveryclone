import styled from "styled-components"



export const FooterCard = styled.footer`
    min-height: 314px;
    background-color: rgb(51, 51, 51);
    color: rgb(255, 255, 255);
    margin-top: auto;
    list-style:none;

    h3{
    margin-bottom:0.5em;
      @media (max-width:768px){
       display:none;
        } 
    }
    
   .container {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;

     @media (max-width:768px){
       display:flex;
       flex-direction:column;
       justify-content:center;
       align-items:center;
       text-align:center;
        } 

        .social{
            @media (max-width:768px){
            margin-bottom:1.5em;
         } 
        }
   }

    img{
    height:32px;
    }

    .logo{
     height:56px;
     width:176px;

       @media (max-width:768px){
        margin-bottom:2em;
        } 
    }

    .links{
    display:flex;
    flex-direction:column;
      @media (max-width:768px){
       margin:1em;
       .parceiro{
       margin-top:-2em;
       }
        }
    }

    .infos{
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    font-size:12px;

    }

    .textoFinal{
    font-size:14px;
    display:flex;
    align-items:center;
    justify-content:center;
        flex-wrap: wrap;

    li{
    margin-right:3em;
    cursor:pointer;
    
    &:hover{
    font-weight: 700;
     }
        @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 1em; 
        }
    }

     p{
    margin-right:3em;

        @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 1em; 
        }
    }
    
         @media (max-width:768px){
         flex-direction:column;
         text-align:center;
        } 
    }

    .moderacao{
    font-size:12px;
    margin-bottom: 1em; 
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

export const TopoFooter = styled.div`
background-color: #444;
height: 5em;
widht:100%;
margin-top:-1em;
padding-top:0.5em;
display:flex;
align-items:center;
text-align:center;
justify-content:center;
font-size: 14px;
font-weight: 600;

  & span {
    display: flex;
    align-items: center;
    cursor:pointer
  }

  & img {
    margin-left: 8px;
    height: 40px; /* Ajuste o tamanho do ícone conforme necessário */
    width: auto;
  }

&:hover {
   background-color: #5C5C5C;
      }     
`

export const Links = styled.li`
list-style: none;
margin-bottom:0.5em;
cursor:pointer;

&:hover{
font-weight: 700;
}

  @media (max-width:768px){
              margin-bottom:1em;
        } 
`

export const Button = styled.button`
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