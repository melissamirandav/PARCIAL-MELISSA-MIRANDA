import React, { useState } from 'react';
import './Formulario.css';
import Input from '../Input/Input';



const Formulario  = ({setShowCard,setPerson}) => {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
	
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/;
  
	const [fullName, setFullName] = useState("");
	const [fullNameError, setFullNameError] = useState("");
	const fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  
	const [birthdate, setBirthdate] = useState("");
	const [birthdateError, setBirthdateError] = useState("");
	const birthdateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
  
	const [zodiacSign, setZodiacSign] = useState("");
	const [zodiacSignError, setZodiacSignError] = useState("");
	const zodiacSignRegex = /^(Aries|Tauro|G[eé]minis|C[aá]ncer|Leo|Virgo|Libra|Escorpio|Sagitario|Capricornio|Acuario|Piscis)$/i;
  
	const validar=()=>{
  let valida =false;
  
	if(email==""){
	setEmailError( "Email is required")
	valida=true;
	}
  
	if(password==""){
		setPasswordError( "Password is required")
		valida=true;
	}
  
	if(fullName==""){
		setFullNameError( "Your full name is required")
		valida=true;
	}
  
	if(birthdate==""){
		setBirthdateError( "Your birthdate is required")
		valida=true;
	}
  
	if(zodiacSign==""){
		setZodiacSignError( "Your zodiac sign is required")
		valida=true;
	}

	if(valida==false && emailError=="" && passwordError==""&&fullNameError=="" &&birthdateError=="" &&zodiacSignError=="" ){
		setPerson({
			email: email,
			password: password,
			fullName: fullName,
			birthdate: birthdate,
			zodiacSign: zodiacSign
		});
		setShowCard(true);
	}
}
  
	return (
	<>
		
	<Input
		regex={emailRegex}      
		errorMessage ="Debe Ingresar un email Valido" 
		value = {email}      
		setValue={setEmail}      
		error={emailError}  
		setError ={setEmailError} 
		placeholder='Ingrese su email'  
		tittle='Email'/>
	<Input 
		regex={passwordRegex}   
		errorMessage ="La contraseña debe contener al menos 8 caracteres con al menos una letra mayúscula, una minúscula, un número y un carácter especial." 
		value = {password}   
		setValue={setPassword}   
		error={passwordError} 
		setError ={setPasswordError} 
		placeholder='Ingrese password' 
		tittle='Password'/>
	<Input 
		regex={fullNameRegex}   
		errorMessage ="Por favor, ingrese un nombre y un apellido válidos (sin caracteres especiales, números o múltiples espacios)."
		value = {fullName}   
		setValue={setFullName}   
		error={fullNameError}  
		setError ={setFullNameError} 
		placeholder='Ingrese su nombre y apellido' 
		tittle='Nombre y Apellido'/>
	<Input 
		regex={birthdateRegex}  
		errorMessage ="Por favor, ingrese una fecha de nacimiento válida en el formato DD/MM/AAAA."       
		value = {birthdate}  
		setValue={setBirthdate}  
		error={birthdateError}  
		setError ={setBirthdateError} 
		placeholder='Ingrese DD/MM/AAAA' 
		tittle='Fecha de nacimiento'/>
	<Input 
		regex={zodiacSignRegex} 
		errorMessage ="Por favor, ingrese un signo zodiacal válido."  
		value = {zodiacSign} 
		setValue={setZodiacSign} 
		error={zodiacSignError} 
		setError ={setZodiacSignError} 
		placeholder='Ingrese su signo' 
		tittle='Signo zodiacal'/>
  
	<button onClick={() => validar()}>Enviar</button>
		
  
	</>
	)
  }

export default Formulario;