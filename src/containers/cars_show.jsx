import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCar, removeCar } from '../actions';


class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = () => {
    this.props.removeCar(this.props.history, this.props.car);
  }

  render() {
    const car = this.props.car;
    if (!car) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <Link className="btn btn-primary btn-cta" to="/">
          Back to garage
        </Link>
        <div className="car-item">
          <h3>{car.brand} - {car.model}</h3>
          <p><strong>Owner: </strong>{car.owner}</p>
          <p>{car.plate}</p>
          <button className="delete" onClick={this.handleClick}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
            Delete
          </button>
        </div>
       </div>
    );
  }
}

function mapStateToProps(reduxState, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10); // From URL
  return {
    car: reduxState.cars.find(car => car.id === id),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar, removeCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
