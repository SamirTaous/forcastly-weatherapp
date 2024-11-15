const City = ({city}) => {
    const date= new Date();
    const formatDate=(date)=>`${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`;

  return (
    <div className="city-container">
        <div className="city-day"><p>{formatDate(date)}</p></div>
        <div className="city-temp"><h1>{city.temp}<span>°C</span></h1></div>
        <div className="city-name"><h3>{city.name}</h3></div>
        <div className="city-condition"><p>{city.condition}</p></div>
    </div>
  )
}

export default City