import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="car-item">
            <h3>{car.brand} - {car.model}</h3>
            <p><strong>Owner:</strong>{car.owner}</p>
            <p>{car.plate}</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>
            {this.props.garage}
          </h3>
          <Link className="btn btn-primary btn-cta" to="/cars/new">
            Let's add a car!
          </Link>
        </div>
        {this.renderCars()}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    garage: reduxState.garage,
    cars: reduxState.cars
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
