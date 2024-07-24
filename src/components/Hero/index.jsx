import { HeroDiv, StyledInput } from './styles.jsx'


const Hero = () => {
    return (
        <HeroDiv>
            <div className='conteudoCentral'>
                <h1>Bebida rápida, gelada e no precinho?<br />
                    O Zé entrega tudo.</h1>
                <StyledInput type="text" placeholder="Inserir endereço para ver preço" />
            </div>
        </HeroDiv>
    )
}

export default Hero
