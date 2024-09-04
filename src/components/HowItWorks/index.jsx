import { Swiper, SwiperSlide } from 'swiper/react';
import { Contents, Main, Item, ImgBrahma, Contents2 } from "./styles.jsx"
import {register} from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


register()

const HowItWorks = ()=>{ 
   const img = [
    {id:'1', image:"https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fwelcome-delivery-man.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D112%26h%3D112%26dpr%3D2%26fm%3Dpng&w=128&q=75",
     text1:'Onde você estiver',
     text2:'Achamos as bebidas geladinhas na sua área e levamos até você!'    
    },
    {id:'2', image:"https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fwelcome-bag.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D112%26h%3D112%26dpr%3D2%26fm%3Dpng&w=128&q=75",
        text1:'Só as fovoritas',
     text2:'Você pode escolher entre cervejas, vinhos, água, energéticos, refrigerantes, salgadinhos e até gelo!'     
    },
    {id:'3', image:"https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fwelcome-greeting.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D112%26h%3D112%26dpr%3D2%26fm%3Dpng&w=128&q=75",
        text1:'Facilita seu brinde',
     text2:'Suas bebidas chegam geladinhas e super rápidas, prontas para brindar!'  
    },
   ]

    return(
        <>
        <Main className="container">
            <ImgBrahma>
            <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fzc-scan-banner-mobile.webp%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2&w=3840&q=75" alt="" />
            </ImgBrahma>
        <h2>Como funciona o Zé Delivery?</h2>
        <Contents>
        <Item>
            <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fwelcome-delivery-man.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D112%26h%3D112%26dpr%3D2%26fm%3Dpng&w=128&q=75" alt="" />
        <h3>Onde você estiver</h3>
        <p>Achamos as bebidas geladinhas na sua área e levamos até você!</p>
        </Item>
        
        <Item>
            <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fwelcome-bag.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D112%26h%3D112%26dpr%3D2%26fm%3Dpng&w=128&q=75" alt="" />
        <h3>Só as fovoritas</h3>
        <p>Você pode escolher entre cervejas, vinhos, água, energéticos, refrigerantes, salgadinhos e até gelo!</p>
        </Item>
        
        <Item>
            <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fwelcome-greeting.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D112%26h%3D112%26dpr%3D2%26fm%3Dpng&w=128&q=75" alt="" />
        <h3>Facilita seu brinde</h3>
        <p>Suas bebidas chegam geladinhas e super rápidas, prontas para brindar!</p>
        </Item>
        </Contents>
        <Contents2>
        <Swiper
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
          {img.map((item)=>(
            <SwiperSlide key={item.id}>
                <img src={item.image}/>
                <h3>{item.text1}</h3>
                <p>{item.text2}</p>
            </SwiperSlide>
        ))}
    </Swiper>
        </Contents2>
        </Main>
        
        </>
    )
}

export default HowItWorks