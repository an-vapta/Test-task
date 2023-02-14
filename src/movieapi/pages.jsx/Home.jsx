import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovie } from '../../redux/action'
import CardComponent from '../card/Cardcomponent'
import { addCart } from '../../redux/action'


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
      <div className='container '>
        <div className="row">
          {
            movie.map((item, index) => {
              return <CardComponent handleClick={handleClick} item={item} index={index} key={index} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home