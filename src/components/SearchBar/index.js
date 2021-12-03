import { useState, useContext } from "react";
import { WeatherInfoContext } from '../../context/weatherInfo/WeatherInfoContext';


const SearchBar = () => {

  const {
    searchLocation,
    getCoords,
    errorInfo: {
      statusCode,
      statusMessage
    }
  } = useContext(WeatherInfoContext);

  const [searchTerm, setSearchTerm] = useState('');

  const onSubmit = (e) => {

    e.preventDefault();
    searchLocation(searchTerm);
    setSearchTerm('');
  };


  const onChangeHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
  };


  return (
    <form onSubmit={onSubmit}>
      <h2>Search City</h2>
      <p>
        {statusCode && statusMessage}
      </p>
      <input
        type='text'
        placeholder='e.g. Frankfurt'
        onChange={(e) => onChangeHandler(e.target.value)}
        value={searchTerm}
        required
      />
      <button>
        Check Weather
      </button>
      or
      <button
        onClick={getCoords}
      >
        Get My Location
      </button>
    </form>
  );
};

export default SearchBar;;
