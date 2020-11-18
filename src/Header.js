import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* Logo on the left - > Image */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        ></img>
      </Link>
      {/* Search  Box */}
      <div className="header__search">
        <input class="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 links */}
      <div className="header__nav">
        {/* 1st  Link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        {/*  2nd link  */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th Link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shoping basket icon */}
            <ShoppingBasket />
            {/* Number of items in the basket */}
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/* Basket icon  with number */}
    </nav>
  );
}

export default Header;
