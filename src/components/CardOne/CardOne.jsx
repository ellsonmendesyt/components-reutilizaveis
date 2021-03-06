import React from 'react'
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import './Card.css';
/*
Problema:
Estamos puxando a dieta mas ela não está sendo usada

*/
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