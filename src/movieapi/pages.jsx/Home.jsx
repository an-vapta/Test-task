import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovie } from '../../redux/action'
import CardComponent from '../card/Cardcomponent'



const Home = () => {
  const { movie } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie())
  }, []);

  const handleClick = () => {
    // dispatch(addCart(item));
  }
  return (
    <>
        <div className="row">
          {
            movie.map((item, index) => {
              return <CardComponent handleClick={handleClick} item={item} index={index} key={index} />
            })
          }
        </div>

    </>
  )
}

export default Home