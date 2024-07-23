
import {FooterCard, Button, Link} from './styles.jsx'

const Footer = ()=>{
return(
    <FooterCard>
        <div className="container">
        <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo-white-text.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D176%26h%3D56%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="Logo do ZE Delivery" className="logo"/>
        <div className="links">
        <h3> Sobre o Zé Delivery</h3>
           <Link href="#">Me Ajuda, Zé!</Link>
           <Link href="#">Trabalhe conosco</Link>
           <Link href="#">Cidades atendidas</Link>
        </div>
        <div className="links">
        <h3>Parcerias</h3>
           <Link href="#">Quero ser parceiro</Link>
           <Link href="#">Trabalhe conosco</Link>
           <br /><br />
           <h3>Cartão Presente</h3>
           <Link href="#">Comprar aqui</Link>
        </div>

        <div className="social">
            <div>
           <h3>Social</h3>
           <a href="#"> <img src="https://img.icons8.com/?size=100&id=8824&format=png&color=FFFFFF" alt="Twitter"/> </a>
           <a href="#"> <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF" alt="Facebook"/> </a>
           <a href="#"> <img src="https://img.icons8.com/?size=100&id=85154&format=png&color=FFFFFF" alt="Instagram"/> </a>
           <a href="#"> <img src="https://img.icons8.com/?size=100&id=FdqeFviqtqBB&format=png&color=FFFFFF" alt="Tik Tok"/> </a>
           </div>
           <Button type='button'>QUERO BAIXAR O APP!</Button>
        </div>
        </div>  
        <div className="container textoFinal">
            <p>Termos de uso</p>
            <p>Política de privacidade</p>
            <p className="infos">ZE SOLUCOES TECNOLOGICAS DE COMERCIO DE BEBIDAS LTDA. - CNPJ: 37.657.197/0001-46 <br />
               Rua Fradique Coutinho, 1632 - CEP: 05.416-002<br />
               Pinheiros - São Paulo/SP</p>
            <p className='moderacao'>BEBA COM MODERAÇÃO</p>
        </div> 
    </FooterCard>
)
}

export default Footer