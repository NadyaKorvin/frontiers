import React from "react"
import { useState } from "react"
import { Footer } from "../footer/Footer"

export function BurgerMenu() {
  const [openBurger, setOpenBurger] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="mobail__firstscreen_logo_block">
          <div className="mobail__frontiers_logo"></div>
          <a className="mobail__firstscreen_logotype" href="#main">
            FRONTIERS
          </a>
        </div>
        <div className={openBurger ? "hamburger-lines__go_to_closer" : "hamburger-lines"} onClick={() => setOpenBurger(!openBurger)}>
          <div></div>
          <div></div>
        </div>
        <div className={openBurger ? "menu-items__opened" : "menu-items__closed"}>
          <ul className="menu-items__ul">
            <li>
              <a className="menu-items__string about_us_yellow_line" href="#about_us" onClick={() => setOpenBurger(false)}>
                О нас
              </a>
              <div className="menu__numbers">(01)</div>
            </li>
            <li>
              <a className="menu-items__string projects_yellow_line" href="#projects" onClick={() => setOpenBurger(false)}>
                Проекты
              </a>
              <div className="menu__numbers">(02)</div>
            </li>
            <li>
              <a className="menu-items__string numbers_yellow_line" href="#numbers" onClick={() => setOpenBurger(false)}>
                Цифры
              </a>
              <div className="menu__numbers">(03)</div>
            </li>
            <li>
              <a className="menu-items__string team_yellow_line" href="#team" onClick={() => setOpenBurger(false)}>
                Команда
              </a>
              <div className="menu__numbers">(04)</div>
            </li>
            <li>
              <a className="menu-items__string form_yellow_line" href="#form" onClick={() => setOpenBurger(false)}>
                Консультация
              </a>
              <div className="menu__numbers">(05)</div>
            </li>
          </ul>
          <Footer setActivePage={1} />
          <div className="white__line_for_footer_border"></div>
        </div>
      </div>
    </nav>
  )
}
