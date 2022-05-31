export function SecondScreenAnimation({ listenMousePosition, mousePosition }) {
  let goUp = ""
  const goUpBlackLines = (mousePosition) => {
    if (mousePosition === "animation__text_first_part") {
      goUp = "up"
      return goUp
    }
  }
  goUpBlackLines(mousePosition)
  return (
    <div className="animation__text_block">
      {goUp !== "up" ? (
        <div>
          <div className="animation__text" onMouseOver={listenMousePosition}>
            <p className="animation__text_first_part">Инвесторам сложно найти хорошие проекты,</p>
            <p className="animation__text_second_part">а хорошим проектам — инвестиции.</p>
          </div>
          <div className="animation__black_lines">
            <div className="animation__1th_black_line"></div>
            <div className="animation__2th_black_line"></div>
            <div className="animation__3th_black_line"></div>
          </div>
        </div>
      ) : (
        <div>
          <div className="animation__text" onMouseOver={listenMousePosition}>
            <p className="animation__text_first_part" style={{ color: "#fff" }}>
              Инвесторам сложно найти хорошие проекты,
            </p>
            <p className="animation__text_second_part" style={{ color: "#000" }}>
              а хорошим проектам — инвестиции.
            </p>
          </div>
          <div className="animation__black_lines">
            <div className="animation__1th_black_line" style={{ marginTop: "-43.98vh", width: "44.815vh", transition: "0.6s ease-in-out" }}></div>
            <div className="animation__2th_black_line" style={{ width: "54.259vh", transition: "0.6s ease-in-out" }}></div>
            <div className="animation__3th_black_line" style={{ width: "66.85vh", transition: "0.6s ease-in-out" }}></div>
          </div>
        </div>
      )}
    </div>
  )
}
