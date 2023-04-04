import React from "react"

export function Footer({ setActivePage }) {
  return (
    <footer className="lastscreen__footer">
      <div className="lastscreen__footer_wrapper_info">
        <div className="lastscreen__contact_group">
          <p className="lastscreen__contact_group_contact">КОНТАКТЫ</p>
          <address className="lastscreen__footer_text">Санкт-Петербург, Невский пр-кт, 71 (5 этаж)</address>
          <a href="tel:89633083308" className="lastscreen__footer_text">
            +7 963 308 3308
          </a>
          <a className="lastscreen__footer_text" href="mailto:nk@frontiers.ru">
            nk@frontiers.ru
          </a>
        </div>
        <div className="lastscreen__frontiers_group">
          <div>
            <a className="lastscreen__contact_group_frontiers" onClick={() => setActivePage(1)} href="#main">
              FRONTIERS
            </a>
            <a href="#" className="lastscreen__footer_text">
              Политика конфиденциальности
            </a>
            <p className="lastscreen__footer_text">© 2022 Frontiers Group</p>
          </div>
          <div className="lastscreen__design_dev">
            <p className="lastscreen__design_dev_text">Дизайн и разработка</p>
            <a href="https://kojo.one" target="_blank" rel="noreferrer">
              <div className="kojo__logo_hidden"> KOJO.ONE</div>
              <img className="kojo__logo" src="./img/kojo_logo.svg" alt="KOJO.ONE"></img>
            </a>
          </div>
        </div>

        <div className="lastscreen__info">
          <div className="lastscreen__footer_info_img"></div>
          <p className="lastscreen__footer_info_text">
            ПРЕДУПРЕЖДЕНИЕ О РИСКАХ<br></br>
            <br></br>Сведения на настоящем сайте (далее - сайт) носят информационный характер и являются приглашением к переговорам. Предложение
            инвестировать в указанные на сайте проекты, не является публичной офертой.<br></br>
            <br></br>Любые инвестиции относятся к рисковым видам деятельности. В частности, это означает, что никто, в том числе организатор проекта,
            не способен гарантировать достижение конкретных финансовых результатов, связанных с применением информации, указанной на сайте.
            <br></br>
            <br></br>Продолжая пользоваться сайтом, направляя заявку через форму на сайте или по электронной почте, или связываясь по контактным
            телефонам, Вы подтверждаете, что согласны с указанными выше утверждениями, осознаёте и принимаете риски, которые связаны с
            инвестированием, самостоятельно несёте ответственность за принятые решения.
          </p>
        </div>
        <div className="lastscreen__info_375">
          <div className="lastscreen__info_375_title">
          <div className="lastscreen__footer_info_img"></div>
          <p className="lastscreen__footer_info_text">
            ПРЕДУПРЕЖДЕНИЕ О РИСКАХ</p>
          </div>
          <p className="lastscreen__footer_info_text">
            Сведения на настоящем сайте (далее - сайт) носят информационный характер и являются приглашением к переговорам. Предложение
            инвестировать в указанные на сайте проекты, не является публичной офертой.<br></br>
            <br></br>Любые инвестиции относятся к рисковым видам деятельности. В частности, это означает, что никто, в том числе организатор проекта,
            не способен гарантировать достижение конкретных финансовых результатов, связанных с применением информации, указанной на сайте.
            <br></br>
            <br></br>Продолжая пользоваться сайтом, направляя заявку через форму на сайте или по электронной почте, или связываясь по контактным
            телефонам, Вы подтверждаете, что согласны с указанными выше утверждениями, осознаёте и принимаете риски, которые связаны с
            инвестированием, самостоятельно несёте ответственность за принятые решения.
          </p>
        </div>
      </div>
    </footer>
  )
}
