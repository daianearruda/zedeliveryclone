/* eslint-disable react/prop-types */

import img from '../../assets/categorias/bombons.png'
import img2 from '../../assets/categorias/cervejas.png'

import {Img, Lista, Item} from './styles.jsx'


const CATEGORIAS = [
    { id: 1, imagem: img, texto: 'Ofertas' },
    { id: 2, imagem: img2, texto: 'Cervejas' },
    { id: 3, imagem: img, texto: 'Águas e Gelo' },
    { id: 4, imagem: img2, texto: 'Refrigerantes' },
    { id: 5, imagem: img, texto: 'Chopp' },
    { id: 6, imagem: img2, texto: 'Churrasco' },
    { id: 7, imagem: img, texto: 'Mercearia' },
    { id: 8, imagem: img2, texto: 'Beats e Ice' },
    { id: 9, imagem: img, texto: 'Vinhos' },
    { id: 10, imagem: img2, texto: 'Destilados' },
    { id: 11, imagem: img, texto: 'Bomboniere' },
    { id: 12, imagem: img2, texto: 'Conveniência' },
    { id: 13, imagem: img, texto: 'Novidades' },
    { id: 14, imagem: img2, texto: 'Cervejas' },
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
