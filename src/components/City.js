const City = ({city,isSet}) => {
    const date= new Date();
    const formatDate=(date)=>`${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`;
    const status=isSet
  return (
    <div className="city-container">
        {isSet? (<><div className="city-day"><p>{formatDate(date)}</p></div>
        <div className="city-temp"><h1>{city.temp}<span>°C</span></h1></div>
        <div className="city-name"><h3>{city.name}</h3></div>
        <div className="city-condition"><p>{city.condition}</p></div></>):(<h3>Search for a city to see the current weather.</h3>)}
    </div>
  )
}

export default City