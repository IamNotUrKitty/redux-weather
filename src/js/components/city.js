import React, { Component } from 'react';

export default class City extends Component {
  render() {
    const { cityData, remove, update } = this.props;
    return (<div className="city-weather">
      <div className="city-weather__controls">
        <i onClick={ update.bind(this, cityData.id) } className="fa fa-refresh"></i>
        <i onClick={ remove.bind(this, cityData.id) } className="fa fa-times"></i>
      </div>
      <div className="city-weather__name">{ cityData.name }</div>
      <div className="city-weather__description">{ cityData.weather[0].description }</div>
      <div className="city-weather__temperature"> { cityData.main.temp }&nbsp;°C&nbsp;</div>
    </div>);
  }
}
