import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="KUCCU Stand Mixer, 6 Qt 660W, 6-Speed Tilt-Head Food Dough Mixer, Kitchen Electric Mixer with Stainless Steel Bowl,Dough Hook,Whisk, Beater, Egg white separator (6-QT, Black-1)"
            price={149.99}
            image="https://m.media-amazon.com/images/I/71hIoWhVckL._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="49538050"
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz"
            price={899.99}
            image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UY436_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="23445930"
            title="Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Twilight Blue"
            price={59.99}
            image="https://m.media-amazon.com/images/I/71yEX4ugtJL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="3254354345"
            title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Space Gray"
            price={1249.99}
            image="https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung 34-Inch CJ791 Ultrawide Curved Gaming Monitor (LC34J791WTNXZA) - 100Hz Refresh, QLED Computer Monitor, 3440 x 1440p Resolution, 4ms Response, Stereo Speakers, White"
            price={899.0}
            image="https://m.media-amazon.com/images/I/91-hWcNu2yL._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
