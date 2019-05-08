import React, {Component} from 'react';
import Weather from './components/Weather';
import Form from './components/Form'


const APIkey = "9040a2671657d629b11f0e1830a91549";

class App extends  Component 
{

  state =
  {
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }
  getweather = async (e) =>
  {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIkey}`)
    const data = await api.json();  
   if (city && country)
   {
    this.setState(
    {
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:''
    })
   }
   else 
   {
    this.setState(
    {
      temperature:'',
      city:'',
      country:'',
      humidity:'',
      description:'',
      error:'Please Enter Data'
    })
   }
  }
render()
{
  return (
    <div className="App">
    <div className="form-container">
    <Form getweather={this.getweather}/>
    <Weather
    temperature={this.state.temperature}
    city={this.state.city}
    country={this.state.country}
    humidity={this.state.humidity}
    description={this.state.description}
    error={this.state.error}
    
    />
    
    </div>
    </div>
  );
}
}
export default App;
