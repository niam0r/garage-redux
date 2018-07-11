export const FETCH_CARS = "FETCH_CARS";
export const FETCH_CAR = "FETCH_CAR";

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



