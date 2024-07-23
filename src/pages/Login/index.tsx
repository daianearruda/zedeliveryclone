import React from 'react'

const Login = () => {
    return (
        <div className='login'>
            <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo-white-text.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D176%26h%3D56%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="Logo do ZE Delivery" />
            <p>Entrar na conta com outros serviços</p>

            <button></button>
            <button></button>
            <hr /> OU <hr />
            <p>Insira seu e-mail para entrar ou se cadastrar</p>
            <input type="text" placeholder='E-mail'/>
            <button>Continuar com E-mail</button>
            <p>Precisa de ajuda? Entre no <span>Me Ajuda, Zé!</span></p>
        </div>
    )
}

export default Login
