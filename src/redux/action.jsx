import axios from 'axios'
export const GET_MOVIES = 'FETCH_MOVIES';
export const REMOVE_ITEM = 'REMOVE_FAVORITE_ITEM';
export const ADD_CART = 'ADD_CART';

const API_URL = "https://api.themoviedb.org/3/movie/popular"
const API_KEY = "4fa0858b3979642723766e0a1cc6c726";
const PARAMS = "page=1"
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`

export const getMovie = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);

      if (res.data) {
        dispatch({
          type: GET_MOVIES,
          payload: res.data.results,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    console.log(error.message)
  }
};

export const addCart = (movie) => {
  return {
    type: ADD_CART,
    payload: movie
  }
};

export const removeCart = (movie) => {
  console.log(movie, "movie")
  return {
    type: REMOVE_ITEM,
    payload: movie
  }
}

