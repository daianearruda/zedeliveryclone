import { useState } from 'react'
import { HeroDiv, StyledInput } from './styles.jsx'
import { ModalBackground } from '../../pages/Home/styles.jsx'
import { useNavigate } from 'react-router-dom'



const Hero = () => {
    const [localizacao, setLocalizacao] = useState(false)
    const navigate = useNavigate()

    const abreLocalizacao = ()=>{
        setLocalizacao(true)
    }

    const voltar = ()=>{
        setLocalizacao(false)
        navigate('/')
    }

    return (
        <HeroDiv>
            <div className='conteudoCentral'>
                <h1>Bebida rápida, gelada e no precinho?<br />
                    O Zé entrega tudo.</h1>
                <StyledInput className={localizacao? 'destacar':''} type="text" placeholder="Inserir endereço para ver preço" onClick={localizacao? voltar :abreLocalizacao}/>
              
            {localizacao &&(
                <>
                <ModalBackground className='background'/>
                 <StyledInput className='destacar top0'  type="text" placeholder="Usar minha localização" onClick={voltar}/>
                 </>
                )}
            </div>
        </HeroDiv>

    )
}

export default Hero
