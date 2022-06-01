import React from 'react'
import './AnimalDetails.css';


function convertFood(food) {
    switch(food) {
      case 'insects':
        return '🐜';
      case 'meat':
        return '🍖';
      case 'plants':
      default:
        return '🌱';
    }
  }


const AnimalDetails = ({diet}) => {
  return (
    <div className='details'>
        <h4>Details: </h4>
        <div>
            Diet: {diet.map(food=> convertFood(food)).join(', ')}
        </div>
    </div>
  )
}

export default AnimalDetails