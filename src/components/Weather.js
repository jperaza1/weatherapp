import React, { useState } from 'react'
import DisplayWeather from './DisplayWeather';
import '../styles/weather.css';
import useFetch from '../hooks/useFetch';

export const Weather = () => {

  
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const [url, setUrl] = useState(null);
  const { isloading, result, error, doFetch } = useFetch(url);
  console.log(result);

  const APIKEY = "1f405868238f38399976132d716d71d3";

  const  weatherData = async (e) => {
    e.preventDefault();

    if(form.city === ""){
      alert("Add City")
    } else {

      setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`);
      
    }

  } 

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };

  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

      {/* {console.log(weather)} */}
      {result?.data !== undefined ? (
        <div>
          <DisplayWeather data={result.data} />
        </div>
      ) : null}
    </div>
  );
}
