import React from 'react'
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import './Card.css';

function CardOne({diet, name, size}) {
  return (
    <div>
        <h3>{name}</h3>
        <div>{size}kg</div>
        <AnimalDetails diet={diet} />
    </div>
  )
}

export default CardOne



/*
//primeiro exemplo
function CardOne({diet, name, size}) {
  return (
    <div>
        <h3>{name}</h3>
        <div>{size}kg</div>
        <div>{diet.join(', ')}.</div>
    </div>
  )
}

*/