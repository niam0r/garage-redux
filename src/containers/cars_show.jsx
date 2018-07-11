import { bindActionCreators } from 'redux';
import { fetchCar } from '../actions/index';
import { connect } from 'react-redux';

import React, { Component } from 'react';

class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  render() {
    const car = this.props.car;
    return (
      <div className="car-item">
        <h3>{car.brand} - {car.model}</h3>
        <p><strong>Owner: </strong>{car.owner}</p>
        <p>{car.plate}</p>
      </div>
    );
  }
}

function mapStateToProps(reduxState, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  const car = reduxState.cars.find(car => car.id === idFromUrl);
  return { car: car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
