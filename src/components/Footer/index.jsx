
import { useState } from 'react'
import {FooterCard, Button, Links, TopoFooter} from './styles.jsx'


const Footer = ()=>{
    const [showTopo, setShowTopo] = useState(false)
    
    const handleScollTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
return(
    <FooterCard>
        <TopoFooter 
        onMouseEnter={()=> setShowTopo(true)} onMouseLeave={()=>setShowTopo(false)} >
      
            <span onClick={handleScollTop}>Voltar ao topo{showTopo &&  <img src="https://www.ze.delivery/_next/image?url=%2Fstatic%2Fimg%2Farrow-up.png&w=96&q=75" alt="" />}
            </span>
   
        </TopoFooter>
        <div className="container">
        <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo-white-text.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D176%26h%3D56%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="Logo do ZE Delivery" className="logo"/>
        <div className="links">
        <h3> Sobre o Zé Delivery</h3>
           <Links href="#">Me Ajuda, Zé!</Links>
           <Links href="#">Trabalhe conosco</Links>
           <Links href="#">Cidades atendidas</Links>
        </div>
        <div className="links">
        <h3>Parcerias</h3>
           <Links href="#">Quero ser parceiro</Links>
           <Links href="#">Trabalhe conosco</Links>
           <br /><br />
           <h3>Cartão Presente</h3>
           <Links href="#">Comprar aqui</Links>
        </div>

        <div className="social">
        <h3>Social</h3>
        
            <div className='socialLinks'>
           <li href="#"> <img src="https://img.icons8.com/?size=100&id=8824&format=png&color=FFFFFF" alt="Twitter"/> </li>
           <li href="#"> <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF" alt="Facebook"/> </li>
           <li href="#"> <img src="https://img.icons8.com/?size=100&id=85154&format=png&color=FFFFFF" alt="Instagram"/> </li>
           <li href="#"> <img src="https://img.icons8.com/?size=100&id=FdqeFviqtqBB&format=png&color=FFFFFF" alt="Tik Tok"/> </li>
           </div>
           <Button type='button'>QUERO BAIXAR O APP!</Button>
        </div>
        </div>  
        <div className="textoFinal">
            <li>Termos de uso</li>
           <li>Política de privacidade</li> 
            <p className="infos">ZE SOLUCOES TECNOLOGICAS DE COMERCIO DE BEBIDAS LTDA. - CNPJ: 37.657.197/0001-46 <br />
               Rua Fradique Coutinho, 1632 - CEP: 05.416-002<br />
               Pinheiros - São Paulo/SP</p>
            <p className='moderacao'>BEBA COM MODERAÇÃO</p>
        </div> 
    </FooterCard>
)
}

export default Footer