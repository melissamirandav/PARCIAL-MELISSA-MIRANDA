import React from 'react';
import './Card.css';

const Card = ({person, setShowCard}) => {

	return (

	<div className="card">
	<h2>Detalles de la persona</h2>
	<div>
		<p><strong>Email:</strong> {person.email}</p>
		<p><strong>Signo Zodiacal:</strong> {person.zodiacSign}</p>
	</div>
	<button onClick = {()=> setShowCard(false)}>Ir a formulario</button>
  </div>
  )
};

export default Card;