import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CityActions from '../actions/CityActions';
import City from './city';

@connect(state =>({state}))
export default class Container extends Component {
  constructor(props) {
    super(props);
    let { dispatch } = this.props;
    this.actions = bindActionCreators(CityActions, dispatch);
  }

  addCity() {
    if(this.refs.cityInput.value) {
      this.actions.addCity(this.refs.cityInput.value);
      this.refs.cityInput.value = '';
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition( pos => {
      this.actions.addCityCoords(pos.coords.latitude.toFixed(3), pos.coords.longitude.toFixed(3))
    })
  }

  render() {
    let { cities } = this.props.state.city;
    const { removeCity, updateCity } = this.actions;
    return (<div className="container">
        { cities.map((i, key) => <div key={key} className="city">
          <City remove={removeCity} update={updateCity} key={key} cityData={i}/>
        </div>) }
        <div className="city-add">
          <input type="text" ref="cityInput"/>
          <button onClick={::this.addCity}>Add</button>
        </div>
      </div>)
  }
}