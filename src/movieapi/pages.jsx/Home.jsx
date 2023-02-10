import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovie } from '../../redux/action'
import CardComponent from '../card/Cardcomponent'

const baseUrl = "https://api.themoviedb.org/3/movie/popular?api_key=4fa0858b3979642723766e0a1cc6c726";

const Home = () => {
  const { movie } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie())
  }, []);
  
  return (
    <div className='container '>
      <div className="row">
        {/* ((text ? filter: movie)) */}
        {movie.map((item, index) => {
          return <CardComponent item={item} index={index} key={index} />
        })}
      </div>
    </div>
  )
}

export default Home