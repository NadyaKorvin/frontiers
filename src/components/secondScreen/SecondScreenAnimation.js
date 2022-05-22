export function SecondScreenAnimation({ listenMousePosition }) {
  return (
    <section className="second__screen">
      <div className="animation__text_block">
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
    </section>
  )
}
