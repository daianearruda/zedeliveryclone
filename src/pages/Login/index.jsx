import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginCard, Footer, Seta } from "./styles"
import seta from '../../assets/seta.png'
import { Link } from "react-router-dom"
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Email:', email)
        console.log('Password:', password)
        if (email === 'admin@admin.com' && password === 'admin123') {
            navigate('/'); 
        } else {
            alert('Credenciais incorretas')
        }
    }

    return (
        <>
            <Link to={'/'}><Seta className="seta"><img src={seta} alt="" /></Seta></Link>

            <LoginCard>
                <div className="cardLogin">
                    <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="Logo do ZE Delivery" />
                    <h4>Entrar na conta com outros serviços</h4>

                    <button className="botao facebook">CONTINUAR COM O FACEBOOK</button>
                    <button className="botao apple">CONTINUAR COM A APPLE</button>
                    <div className="hr">
                        <hr /> OU <hr />
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="email">
                        <p>Insira seu e-mail para entrar ou se cadastrar</p>
                        <input type="text" placeholder='E-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <input
                            type="password"
                            placeholder='Senha'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                    </div>
                    <button className="botao amarelo" type="submit">Cadastrar</button>
                    </form>
                    <p>Precisa de ajuda? Entre no <span>Me Ajuda, Zé!</span></p>
                </div>
            </LoginCard>
            <Footer>
                <hr />
                <div>
                    <p>Termos de uso</p> <p>Política de privacidade</p>
                </div>

                <p className="infos">ZE SOLUCOES TECNOLOGICAS DE COMERCIO DE BEBIDAS LTDA. - CNPJ: 37.657.197/0001-46 <br />
                    Rua Fradique Coutinho, 1632 - CEP: 05.416-002 <br />
                    Pinheiros - São Paulo/SP</p>

            </Footer>
        </>
    )
}

export default Login
