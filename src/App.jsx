import { useState } from 'react'
import './App.css'
import Card from './Componentes/Card'

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

 
  return (
    <>
      <div className="App">
        <h1>Inicio de sesion</h1>
        <form >
          <label htmlFor="">Nombre de usuario</label>
          <input value={userName} type="text" placeholder='Ingrese usuario' />
          <label htmlFor="">Contraseña</label>
          <input value={password} type="text" placeholder='Ingrese su contraseña' />
        </form>
      <Card  name= {userName}/>
    </div>
  
    </>
  )
}

export default App
