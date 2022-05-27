export function ThirdScreen({ removePerson, refreshData }) {
  return (
    <div className="third__block">
      <p className="third__block_title">ЭКСПЕРТЫ СВОЕГО ДЕЛА</p>
      <div className="third__block_main">
        <p className="third__block_description">Выращиваем капитал инвестора на росте сильных компаний. Даем быстрый результат надежному бизнесу.</p>
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
