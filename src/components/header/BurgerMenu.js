import React from "react"
import { Footer } from "../footer/Footer"

export function BurgerMenu() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="mobail__firstscreen_logotype">FRONTIERS</div>
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
        </div>
        <span className="white__block_under_logo"></span>
        <div className="menu-items">
          <ul className="menu-items__ul">
            <li>
              <a className="menu-items__string about_us_yellow_line" href="#link__about_us">
                О нас
              </a>
              <div className="menu__numbers">(01)</div>
            </li>
            <li>
              <a className="menu-items__string team_yellow_line" href="#link__team">
                Команда
              </a>
              <div className="menu__numbers">(02)</div>
            </li>
            <li>
              <a className="menu-items__string numbers_yellow_line" href="#link__numbers">
                Цифры
              </a>
              <div className="menu__numbers">(03)</div>
            </li>
            <li>
              <a className="menu-items__string form_yellow_line" href="#form">
                Консультация
              </a>
              <div className="menu__numbers">(04)</div>
            </li>
          </ul>
          <Footer />
          <div className="white__line_for_footer_border"></div>
        </div>
      </div>
    </nav>
  )
}
