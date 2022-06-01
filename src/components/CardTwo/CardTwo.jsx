import React from 'react'
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import './Card.css';
/*
no cartao vamos usar somente o nome e o tamanho
o restante vai ser usado no componente AnimalDetails
{...props}  vai pegar cada par de chave-valor e passar como propriedade

*/
function CardTwo({ name, size, ...props}) {
  return (
    <div>
        <h3>{name}</h3>
        <div>{size}kg</div>
        <AnimalDetails {...props} />
    </div>
  )
}

export default CardTwo



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