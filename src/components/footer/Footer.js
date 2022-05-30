export function Footer() {
  return (
    <footer className="lastscreen__footer">
      <div className="lastscreen__footer_wrapper_info">
        <div className="lastscreen__contact_group">
          <p className="lastscreen__contact_group_contact">КОНТАКТЫ</p>
          <p className="lastscreen__footer_text">Санкт-Петербург, Невский пр-кт, 71 (5 этаж)</p>
          <p className="lastscreen__footer_text">+7 967 344 9754</p>
          <p className="lastscreen__footer_text">
            <a href="mailto:info@frontiers.ru">nk@frontiers.ru</a>
          </p>
        </div>
        <div className="lastscreen__frontiers_group">
          <p className="lastscreen__contact_group_frontiers">FRONTIERS</p>
          <p className="lastscreen__footer_text">Политика конфиденциальности</p>
          <p className="lastscreen__footer_text">© 2022 Frontiers Group</p>
        </div>
      </div>
      <div className="lastscreen__design_dev">
        <p className="lastscreen__footer_text">Дизайн и разработка</p>
        <a href="https://kojo.one" target="_blank" rel="noreferrer">
          <div className="kojo__logo"></div>
        </a>
      </div>
    </footer>
  )
}
