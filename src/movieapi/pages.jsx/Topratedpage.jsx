import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import AddToCard from '../card/AddToCard'
import CardComponent from '../card/Cardcomponent';



const Topratedpage = () => {
  const { cart } = useSelector(state => state.movieReducer);


  useEffect(() => {

  }, [cart])
  return (
    <div className="container-fluid">
      <div className="row">
        {cart.length > 0 && cart.map((item, index) => (
          <CardComponent item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Topratedpage