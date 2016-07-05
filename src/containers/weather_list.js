import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{

  renderWeather(cityData){
    const name=cityData.city.name;
    const temps=cityData.list.map(weather=>weather.main.temp);
    const pressure=cityData.list.map(weather=>weather.main.pressure);
    const humidity=cityData.list.map(weather=>weather.main.humidity);
    const {lon, lat }= cityData.city.coord;

    return(
      <tr key={name}>
        <td> <GoogleMap lat={lat} lon={lon} /></td>
        <td>
          <Chart data={temps} color="orange" units="K"/>
        </td>
        <td>
          <Chart data={pressure} color="blue" units="hPa"/>
        </td>
        <td>
          <Chart data={humidity} color="red" units="%"/>
        </td>
      </tr>
    );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <th>city</th>
          <th>Temparature (K)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({weather}){
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
