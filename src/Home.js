import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home(){
    return (
        <div className="home">
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/launch/AONT/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB406746259_.jpg"
                 alt=""/>
                 {/*Product id, title, rating, img*/}
             <div className="home__row">
                 <Product
                 id="1234567"
                 title="The Witcher Saga (8 books): Andrzej Sapkowski's (Kindle Edition)"
                 price={11.56}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/B1VwZtBIUbS._SY300_.png"
                 />
                 <Product
                 id="12345671"
                 title="New Apple iPhone SE (64GB, Black) [Locked] + Cricket Wireless Plan"
                 price={555.99}
                 rating={5}
                 image="https://m.media-amazon.com/images/I/81hCytKTUTL._AC_UL320_.jpg"
                 />
                </div>

            <div className="home__row">
                <Product
                 id="12345672"
                 title="KitchenAid KSM180QHGSD Queen of Hearts Stand Mixer, 5 Qt, Passion Red"
                 price={346.07}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/71V2DtObsPL._AC_SX522_.jpg"
                 />
                 <Product
                 id="12345673"
                 title="KitchenAid Classic Prep Bowls with Lids, Set of 4, Empire Red"
                 price={12.99}
                 rating={4}
                 image="https://images-na.ssl-images-amazon.com/images/I/714CxVWiS5L._AC_SX522_.jpg"
                 />
                 <Product
                 id="12345674"
                 title="KitchenAid Classic Tool and Gadget Set, 17-Piece Red"
                 price={50.74}
                 rating={4}
                 image="https://images-na.ssl-images-amazon.com/images/I/71inRp-7qhL._AC_SX522_.jpg"
                 />
            </div>
            <div className="home__row">
                <Product
                 id="12345675"
                 title="TCL 50S425 50 inch 4K Smart LED Roku TV (2019)"
                 price={600}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/71tN5cFBvFL._AC_SX355_.jpg"
                 />
            </div>
            </div>
    )
}

export default Home;