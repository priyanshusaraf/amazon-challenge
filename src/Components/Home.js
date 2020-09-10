import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.JPG"
        alt=""
        className="home__image"
      />
      {/* product id, title, rating, image */}
      <div className="home__row">
        <Product
          id="13241432"
          title="automate the boring stuff with python"
          price={680}
          rating={5}
          image="http://ebook3000.com/upimg/allimg/150502/0038040.jpg"
        />
        <Product
          id="13241432"
          title="LG OLED DISPLAY TV- 5400MAH, COMES WITH WIFI"
          price={68000}
          rating={5}
          image="https://cdn.shopclues.com/images1/thumbnails/109040/320/320/150532220-109040098-1596883456.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="13241432"
          title="iPhone 11 64GB MEMORY A13 bionic chip"
          price={64999}
          rating={5}
          image="https://m.media-amazon.com/images/I/51kGDXeFZKL._AC_UY218_.jpg"
        />
        <Product
          id="13241432"
          title="Dell Inspiron 3493 14-inch HD Laptop (10th Gen i3-1005G1/4GB/1TB HDD/Win 10 + MS Office/Intel HD Graphics/Silver) D560193WIN9SE"
          price={28000}
          rating={3}
          image="https://m.media-amazon.com/images/I/5151M4yQlML._AC_UY218_.jpg"
        />
        <Product
          id="13241432"
          title="automate the boring stuff with python"
          price={680}
          rating={5}
          image="http://ebook3000.com/upimg/allimg/150502/0038040.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="13241432"
          title="iPhone 11 64GB MEMORY A13 bionic chip"
          price={64999}
          rating={5}
          image="https://m.media-amazon.com/images/I/51kGDXeFZKL._AC_UY218_.jpg"
        />
        <Product
          id="13241432"
          title="Dell Inspiron 3493 14-inch HD Laptop (10th Gen i3-1005G1/4GB/1TB HDD/Win 10 + MS Office/Intel HD Graphics/Silver) D560193WIN9SE"
          price={28000}
          rating={3}
          image="https://m.media-amazon.com/images/I/5151M4yQlML._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
