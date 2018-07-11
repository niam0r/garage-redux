export const FETCH_CARS = "FETCH_CARS";

const BASE_URL = 'https://wagon-garage-api.herokuapp.com/';

export function fetchCars(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url).then(res => res.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}
