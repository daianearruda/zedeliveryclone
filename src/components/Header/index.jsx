import { Link } from 'react-router-dom'
import * as S from './styles.jsx'

const Header = () => {
    return (
        <S.HeaderBar>
            <S.DivHeader className="container header">
            <S.Img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo-white-text.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D176%26h%3D56%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="Logo do ZE Delivery" />
            <Link to={'/login'}><S.Button>Entrar</S.Button></Link>  
            </S.DivHeader>
        </S.HeaderBar> 
    )
}

export default Header