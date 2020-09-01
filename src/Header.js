import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from "./StateProvider";
function Header() {
    const [{ basket }] = useStateValue();

    return (
        <nav className="header">
            
            {/*logo img*/}
            <Link to="/">
            <img className="header__logo" 
                 src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                 alt=""/>
            </Link>
            {/*search box */}
            <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div>
            {/* 3 links */}
            <div className="header__nav">
                <Link className='header__link' to='/login'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello person</span>
                        <span className="header__optionLineTwo">Sign in</span>
                    </div>
                </Link>

                <Link className='header__link' to='/'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link className='header__link' to='/'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to='/checkout' className='header__link'>
                    <div className="header__optionBasket">
                        {/*icono*/}
                        <ShoppingBasketIcon />
                        {/*shopping*/}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>

                    </div>


                </Link>




            </div>
            
            {/*Basket icon with number*/}
            
            
        </nav>
    )
}

export default Header;