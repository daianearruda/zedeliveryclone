import { useState } from "react";
import { Main, Button,ButtonBaixar } from "./styles.jsx";

const Figure = () => {
  const [alternarButtonApple, setAlternarButtonApple] = useState(true);
  const [alternarButtonGoogle, setAlternarButtonGoogle] = useState(true);

  const alteraButtonApple = () => {
    setAlternarButtonApple(false);
  };

  const retornaButtonApple = ()=>{
    setAlternarButtonApple(true);
  }

  const alteraButtonGoogle = () => {
    setAlternarButtonGoogle(false);
  };

  const retornaButtonGoogle = ()=>{
    setAlternarButtonGoogle(true);
  }




  return (
    <Main>
      <div className="content">
        <h2>Já baixou o app?</h2>
        <h4>Entregamos onde você estiver, através de nosso parceiro mais próximo.</h4>
<div className="buttons">
        {alternarButtonApple ? (
          <>
          <div className="containerButton">
          <Button onMouseEnter={alteraButtonApple}>
            <img
              className="button"
              src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fapple_store_badge.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D190%26h%3D56%26dpr%3D2%26fm%3Dpng&w=384&q=75"
              alt="App Store Badge"
            />
          </Button>
          </div>
          </>
        ) : (
            <div className="containerButton">
            <ButtonBaixar onMouseLeave={retornaButtonApple}>
            QUERO BAIXAR!
          </ButtonBaixar>
          </div>
        )}

        {alternarButtonGoogle? (
            <div className="containerButton">
        <Button onMouseEnter={alteraButtonGoogle}>
          <img
            className="button"
            src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fgoogle_store_badge.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D190%26h%3D56%26dpr%3D2%26fm%3Dpng&w=384&q=75"
            alt="Google Play Badge"
          />
        </Button>
        </div>

        ):(
            <div className="containerButton">
            <ButtonBaixar onMouseLeave={retornaButtonGoogle}>
          QUERO BAIXAR!
          </ButtonBaixar>
          </div>
        )}
</div>

      </div>

      <img
        className="foto"
        src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fmaluma_baixo_desktop.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D1920%26h%3D418%26dpr%3D2%26fm%3Dpng&w=1920&q=75"
        alt="Maluma"
      />
    </Main>
  );
};

export default Figure;
