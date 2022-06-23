import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsBookFill } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import { TiHeart } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import { GiEarthAfricaEurope } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.css";
import Images from "../images/index";
import { CartContext } from "../context/cartContext";
const Nav = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img className="icon" src={Images.logo} />
          <span className="brandtitle">Art Bridge to Baghdad</span>
        </Link>

        <div className="collapse navbar-collapse" id="navbar1">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                <BsBookFill /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">
                <RiContactsFill /> Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="paintings">
                <TiHeart /> Paintings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="antiques">
                <AiFillStar /> Antiques
              </Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav me-auto">
          <li className="nav-item cart">
            <Link className="nav-link" to="cart">
              <BsCartCheckFill />{" "}
              {cartItems.length > 0 ? cartItems.length : null} Cart
            </Link>
          </li>
        </ul>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar1"
          aria-controls="navbar1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
