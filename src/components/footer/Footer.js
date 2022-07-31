import React from "react"

export function Footer({ setActivePage }) {
  return (
    <footer className="lastscreen__footer">
      <div className="lastscreen__footer_wrapper_info">
        <div className="lastscreen__contact_group">
          <p className="lastscreen__contact_group_contact">КОНТАКТЫ</p>
          <address className="lastscreen__footer_text">Санкт-Петербург, Невский пр-кт, 71 (5 этаж)</address>
          <a href="tel:89673449754" className="lastscreen__footer_text">
            +7 967 344 9754
          </a>
          <a className="lastscreen__footer_text" href="mailto:nk@frontiers.ru">
            nk@frontiers.ru
          </a>
        </div>
        <div className="lastscreen__frontiers_group">
          <a className="lastscreen__contact_group_frontiers" onClick={() => setActivePage(1)} href="#main">
            FRONTIERS
          </a>
          <a href="#" className="lastscreen__footer_text">
            Политика конфиденциальности
          </a>
          <p className="lastscreen__footer_text">© 2022 Frontiers Group</p>
        </div>
      </div>
      <div className="lastscreen__design_dev">
        <p className="lastscreen__footer_text">Дизайн и разработка</p>
        <a href="https://kojo.one" target="_blank" rel="noreferrer">
          <div className="kojo__logo_hidden"> KOJO.ONE</div>
          <img className="kojo__logo" src="./img/kojo_logo.svg" alt="KOJO.ONE"></img>
        </a>
      </div>
    </footer>
  )
}
