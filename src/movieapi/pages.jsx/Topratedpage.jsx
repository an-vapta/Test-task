import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovie } from '../../redux/action'

const Topratedpage = () => {
  // const data = useSelector(state => state.movieReducer)
  const { movie } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getMovie())
  }, []);

  console.log(movie, "movie")
  return (
    <div>Topratedpage</div>
  )
}

export default Topratedpage