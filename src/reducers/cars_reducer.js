import { FETCH_CARS, FETCH_CAR, CAR_CREATED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CARS: {
      return action.payload;
    }
    case FETCH_CAR: {
      return [action.payload];
    }
    case CAR_CREATED: {
      return [action.payload];
    }
    default:
      return state;
  }
}
