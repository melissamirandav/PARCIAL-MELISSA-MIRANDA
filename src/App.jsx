import { useState } from 'react';
import './App.css'
import Card from './Componentes/Card/Card';
import Formulario from './Componentes/Formulario/Formulario';


function App() {
  const [showCard, setShowCard] =useState(false);
  const [person, setPerson] = useState( {
    email: '',
    password: '',
    fullName: '',
    birthdate: '',
    zodiacSign: '',
  });
  return (
    <>
      {showCard ? ( <Card person={person} setShowCard={setShowCard} />) : (<Formulario setPerson={setPerson} setShowCard={setShowCard}/>)}
    </>
  )
}

export default App

