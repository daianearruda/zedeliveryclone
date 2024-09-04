/* eslint-disable react/prop-types */


import img1 from "../../assets/categorias/ofertas.png"
import img2 from "../../assets/categorias/cervejas.png"
import img3 from '../../assets/categorias/aguaGelo.png'
import img4 from '../../assets/categorias/refrigerantes.png'
import img5 from '../../assets/categorias/choop.png'
import img6 from '../../assets/categorias/churrasco.png'
import img7 from '../../assets/categorias/mercearia.png'
import img8 from '../../assets/categorias/beatsIce.png'
import img9 from '../../assets/categorias/vinhos.png'
import img10 from '../../assets/categorias/petiscos.png'
import img11 from '../../assets/categorias/destilados.png'
import img12 from '../../assets/categorias/bombons.png'
import img13 from '../../assets/categorias/conveniencia.png'
import img14 from '../../assets/categorias/novidades.png'



import {Img, Lista, Item} from './styles.jsx'


const CATEGORIAS = [
    { id: 1, imagem: img1, texto: 'Ofertas' },
    { id: 2, imagem: img2, texto: 'Cervejas' },
    { id: 3, imagem: img3, texto: 'Águas e Gelo' },
    { id: 4, imagem: img4, texto: 'Não alcoólicos' },
    { id: 5, imagem: img5, texto: 'Chopp' },
    { id: 6, imagem: img6, texto: 'Churrasco' },
    { id: 7, imagem: img7, texto: 'Mercearia' },
    { id: 8, imagem: img8, texto: 'Beats e Ice' },
    { id: 9, imagem: img9, texto: 'Vinhos' },
    { id: 10, imagem: img10, texto: 'Pestiscos' },
    { id: 11, imagem: img11, texto: 'Destilados' },
    { id: 12, imagem: img12, texto: 'Bomboniere' },
    { id: 13, imagem: img13, texto: 'Conveniência' },
    { id: 14, imagem: img14, texto: 'Novidades' },
]

const Categoria = ({ imagem, texto }) => {
    return (
        <Item>
            <Img src={imagem} alt={texto} />
            <div>
            {texto}
            </div>
        </Item>
    )
}

const Categorias = () => {
    return (
        <Lista className='container'>
            {CATEGORIAS.map(categoria => (
                <Categoria 
                    key={categoria.id} 
                    imagem={categoria.imagem} 
                    texto={categoria.texto} 
                />
            ))}
        </Lista>
    )
}

export default Categorias
