export function AboutAs({ removePerson, refreshData }) {
  return (
    <div className="about_us__block">
      <p className="about_us__block_title">ЭКСПЕРТЫ СВОЕГО ДЕЛА</p>
      <div className="about_us__block_main">
        <div className="about_us__block_description">
          <p>
            Для нас это не просто бизнес,<br></br>но и вклад в развитие здорового предпринимательства в России.<br></br>
            <br></br>Нам в кайф видеть, как предприниматели растут, появляются новые рабочие места, как повышается доверие между предпринимателями и
            инвесторами.
          </p>
          <div className="about_us__first_yellow_line"></div>
          <div className="about_us__second_yellow_line"></div>
        </div>
        <div className="persones">
          <div className="big_persona" style={{ backgroundImage: `url('${refreshData[0].url}')` }}>
            <div className="persones_description">
              <p className="persones__title">{refreshData[0].title}</p>
              <hr className="persones__hr"></hr>
              <p className="persones__name">{refreshData[0].name}</p>
              <p className="persones__text">{refreshData[0].text}</p>
            </div>
          </div>
          {refreshData.slice(1).map((elem) => (
            <div className={elem.className} key={elem.key} style={{ backgroundImage: `url('${elem.url}')` }} onClick={() => removePerson(elem)}></div>
          ))}
        </div>
      </div>
    </div>
  )
}
