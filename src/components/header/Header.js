import React from "react"
import { BurgerMenu } from "./BurgerMenu"

export function Header({ setActivePage }) {
  return (
    <header className="firstscreen__header">
      <div className="header_block">
        <div className="firstscreen__logo_block" onClick={() => setActivePage(1)}>
          <div className="frontiers_logo"></div>
          <a className="firstscreen__logotype" href="#main">
            FRONTIERS
          </a>
        </div>
        <div className="firstscreen__menu">
          <div className="firstscreen__nav">
            <nav>
              <ul className="firstscreen__nav_team">
                <li className="nav_links" onClick={() => setActivePage(2)}>
                  О нас
                </li>
                <a className="nav_links_tablet" href="#about_us">
                  О нас
                </a>
                <li className="nav_links" onClick={() => setActivePage(3)}>
                  Проекты
                </li>
                <a className="nav_links_tablet" href="#projects">
                  Проекты
                </a>
                <li className="nav_links" onClick={() => setActivePage(4)}>
                  Цифры
                </li>
                <a className="nav_links_tablet" href="#numbers">
                  Цифры
                </a>
                <li className="nav_links" onClick={() => setActivePage(5)}>
                  Команда
                </li>
                <a className="nav_links_tablet" href="#team">
                  Команда
                </a>
              </ul>
            </nav>
          </div>
          <button className="firstscreen__button" onClick={() => setActivePage(6)}>
            Получить консультацию
          </button>
          <a className="firstscreen__button_tablet" href="#form">
            Получить консультацию
          </a>
        </div>
      </div>
      <BurgerMenu />
    </header>
  )
}
