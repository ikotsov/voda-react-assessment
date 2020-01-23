import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchModal from "./SearchModal";

function Menu(props) {
  return props.menu.map(menu => {
    return (
      <li className="menu__item">
        <NavLink
          className="menu__link"
          to={`/${menu.title
            .toString()
            .toLowerCase()
            .replace(/ /g, "")}`}
        >
          {menu.title}
        </NavLink>
      </li>
    );
  });
}

function Slider(props) {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2500
  };

  const slides = props.slider.map(slide => {
    return (
      <div style={{ height: "100%" }}>
        <div
          className="slider__item"
          style={{ backgroundImage: "url(" + slide.image + ")" }}
        >
          <div className="slider__item-title">{slide.title}</div>
          <div className="slider__item-subtitle">{slide.subtitle}</div>
        </div>
      </div>
    );
  });

  return <Slick {...slickSettings}>{slides}</Slick>;
}

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__top">
          <nav className="menu">
            <ul className="menu__list">
              <Menu menu={this.props.menu} />
            </ul>
          </nav>
          <SearchModal />
        </div>

        <Slider slider={this.props.slider} />
      </header>
    );
  }
}

export default Header;
