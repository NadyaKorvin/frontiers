import { BurgerMenu } from "./BurgerMenu"

export function Header({ setActivePage }) {
  return (
    <header className="firstscreen__header">
      <div className="header_block">
        <div className="firstscreen__logotype">FRONTIERS</div>
        <div className="firstscreen__menu">
          <div className="firstscreen__nav">
            <nav>
              <ul className="firstscreen__nav_team">
                <li className="nav_links" onClick={() => setActivePage(2)}>
                  О нас
                </li>
                <li className="nav_links" onClick={() => setActivePage(4)}>
                  Команда
                </li>
                <li className="nav_links" onClick={() => setActivePage(3)}>
                  Цифры
                </li>
              </ul>
            </nav>
          </div>
          <button className="firstscreen__button" onClick={() => setActivePage(5)}>
            Получить консультацию
          </button>
        </div>
      </div>
      <BurgerMenu />
    </header>
  )
}
