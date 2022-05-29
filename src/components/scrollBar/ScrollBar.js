export function ScrollBar({ activePage }) {
  return (
    <div className="scroll__bar">
      {activePage == 1 ? <div className="square1 activ_page_square"></div> : <div className="square1"></div>}
      {activePage == 2 ? <div className="square2 activ_page_square"></div> : <div className="square2"></div>}
      {activePage == 3 ? <div className="square3 activ_page_square"></div> : <div className="square3"></div>}
      {activePage == 4 ? <div className="square4 activ_page_square"></div> : <div className="square4"></div>}
      {activePage == 5 ? <div className="square5 activ_page_square"></div> : <div className="square5"></div>}
    </div>
  )
}
