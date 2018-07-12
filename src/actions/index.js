export const FETCH_CARS = "FETCH_CARS";
export const FETCH_CAR = "FETCH_CAR";
export const REMOVE_CAR = 'REMOVE_CAR';

const BASE_URL = 'https://wagon-garage-api.herokuapp.com/';

export function fetchCar(id) {
  const url = `${BASE_URL}/cars/${id}`;
  const promise = fetch(url).then(res => res.json());

  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function fetchCars(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url).then(res => res.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function createCar(garage, car, callback) {
  const url = `${BASE_URL}/${garage}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  }).then(response => response.json())
    .then(callback());

  return {
    type: CAR_CREATED,
    payload: request
  };
}

export function removeCar(history, car) {
  const url = `${BASE_URL}/cars/${car.id}`;
  fetch(url, { method: 'DELETE' })
    .then(r => r.json())
    .then(() => history.push(''));

  return {
    type: REMOVE_CAR,
    payload: car
  };
}
