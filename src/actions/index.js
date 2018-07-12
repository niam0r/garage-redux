export const FETCH_CARS = "FETCH_CARS";
export const FETCH_CAR = "FETCH_CAR";
export const CAR_CREATED = 'CAR_CREATED';

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

export function createPost(body) {
  const request = fetch(`${ROOT_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(response => response.json())
    return {
      type: CAR_CREATED,
      payload: request
  };
}
