import React,{Component}from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import { async } from 'q';
 
class App extends Component {
   state={
     temperature:null,
     city:null,
     country:null,
     humidity:null,
     description:null,
     error:"Enter Your City & Country",

   }
   getWeather=async(e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const apidata= await 
    fetch(`http://api.openweathermap.org/data/2.5/find?q=${city},${country}&units=metric&appid=8c5fd71b7ffb4944463c9fe77cc38ff1`)
    const data=await apidata.json();
    console.log(data);
    if(city && country){
    this.setState({
    temperature:data.list[0].main.temp,
    city:data.list[0].name,
    country:data.list[0].sys.country,
    humidity:data.list[0].main.humidity,
    description:data.list[0].weather[0].description,
    error:null
    })
  }
}
  render(){

  return (
    <div>
    <div className="wrapper">
    <div className="main">
    <div className="container">
    <div className="row">
    <div className="col-xs-5 title-container">
    <Titles/>
    </div>
    <div className="col-xs-7 form-container container">
      <div style={{display:"flex"}}>
      <Form weather={this.getWeather} />
      </div>
    <Weather temperature={this.state.temperature}
    city={this.state.city}
    country={this.state.country}
    humidity={this.state.humidity}
    description={this.state.description}
    error={this.state.error}
    />
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}
}

export default App;
