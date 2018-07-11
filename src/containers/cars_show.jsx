import { bindActionCreators } from 'redux';
import { fetchCar } from '../actions/index';

import React, { Component } from 'react';

export class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  render() {
    return (
      <div></div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
