import React,{Component}from 'react';

class Weather extends Component {
   render(){
       if (this.props.city ===null && this.props.country===null){
           return<div className="weather__error">{this.props.error}</div>
       }
       else{
    return (
      <div>
         <p className="weather__key">Location :<span className="weather__value"> {this.props.city},{this.props.country}</span></p>
         <p className="weather__key">Temperature :<span className="weather__value">{this.props.temperature}</span> </p>
         <p className="weather__key"> Humidity: <span className="weather__value">{this.props.humidity}</span></p>
         <p className="weather__key">Condition : <span className="weather__value">{this.props.description}</span></p>
      </div>
    );
       }
  }
}
  export default Weather;