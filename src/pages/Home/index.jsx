import { useState, useEffect } from "react"
import Categorias from "../../components/Categorias"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Hero from "../../components/Hero"


import {ModalBackground, ModalContent} from './styles.jsx'
import HowItWorks from "../../components/HowItWorks/index.jsx"
import City from "../../components/City/index.jsx"
import Figure from "../../components/Figure/index.jsx"


const Home = () => {
    const [showModal, setShowModal] = useState(true)
    const [mensagem, setMensagem] = useState(false)
  
  
    useEffect(() => {
      setShowModal(true)
    }, [])
  
    const handleCloseModal = () => {
      setShowModal(false);
    }
  
    const handleNoClick = () => {
      setMensagem(true)
    }

    const inicio =()=>{
      setShowModal(true)
      setMensagem(false)
    }
  
    return (
      <>
        <Header />
        <Hero />
        {showModal && (
          <ModalBackground >
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fsmall-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D83%26h%3D83%26dpr%3D2%26fm%3Dpng&w=96&q=75" alt="logo" />
              <h2>Você tem 18 anos ou mais?</h2>
              <div>
                <button className="nao" onClick={handleNoClick}>NÃO</button>
                <button className="sim" onClick={handleCloseModal}>SIM</button>
              </div>
            </ModalContent>
          </ModalBackground>
        )}
        {mensagem && (
          <ModalBackground >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fsmall-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D83%26h%3D83%26dpr%3D2%26fm%3Dpng&w=96&q=75" alt="logo" />
           <p>Você precisa ter 18 anos ou mais para consumir bebidas alcoólicas.</p> 
          
           <p> Relaxe, o tempo passa rápido!</p>
           <button className="sim voltar" onClick={inicio}>VOLTAR</button>
          </ModalContent>
          </ModalBackground>
        )}

        <Categorias />
        <HowItWorks/>
        <City/>
        <Figure/>
        <Footer />
      </>
    )
  }
  
  export default Home