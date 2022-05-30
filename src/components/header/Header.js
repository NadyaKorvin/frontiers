export function Header({ setActivePage }) {
  return (
    <header className="firstscreen__header">
      <div className="firstscreen__logotype">FRONTIERS</div>
      <div className="firstscreen__menu">
        <div className="firstscreen__nav">
          <nav className="firstscreen__nav_team">
            <a className="nav_links" onClick={() => setActivePage(2)}>
              О нас
            </a>
            <a className="nav_links" onClick={() => setActivePage(4)}>
              Команда
            </a>
            <a className="nav_links" onClick={() => setActivePage(3)}>
              Цифры
            </a>
          </nav>
        </div>
        <button className="firstscreen__button" onClick={() => setActivePage(5)}>
          Получить консультацию
        </button>
      </div>
    </header>
  )
}
