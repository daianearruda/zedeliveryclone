import { useState } from "react";
import { Main, Button } from "./styles.jsx";

const Figure = () => {
  const [alternarButton, setAlternarButton] = useState(true);

  const alteraButton = () => {
    setAlternarButton(false);
  };

  return (
    <Main>
      <div className="content">
        <h2>Já baixou o app?</h2>
        <h4>Entregamos onde você estiver, através de nosso parceiro mais próximo.</h4>

        {alternarButton ? (
          <Button onClick={alteraButton}>
            <img
              className="button"
              src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fapple_store_badge.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D190%26h%3D56%26dpr%3D2%26fm%3Dpng&w=384&q=75"
              alt="App Store Badge"
            />
          </Button>
        ) : (
          <Button>oi</Button>
        )}

        <Button>
          <img
            className="button"
            src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fgoogle_store_badge.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D190%26h%3D56%26dpr%3D2%26fm%3Dpng&w=384&q=75"
            alt="Google Play Badge"
          />
        </Button>
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
