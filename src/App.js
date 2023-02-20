import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Logo from './componentes/Logo';
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear';
import ImagenLogo from './imagenes/freecodecamp-logo.png'
import { useState } from 'react';
import { evaluate, NaN } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    if(input.length < 18) {
      if (input == 'Infinity' || input == 'Undefined') {
      setInput(val);
    } else {
      setInput(input + val);
    }

    if (input.match(/([\+\-\*\/])([\+\-\*\/])/) != null) {
    alert("Al colocar 2 operadores juntos tu calculo no se realizara")
  }} else {
    alert("Disculpe, no puede ingresar mas caracteres")
  }
    
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert("Por favor ingrese algun valor si desea realizar calculos")
    }
  };

  const eliminarUltimo = () => {
    let respaldo = input.split("");
    respaldo[respaldo.length - 1] = "";
    respaldo = respaldo.join("")
    setInput(respaldo);
  };

  return (
    <div className="App">
      <Logo 
        clase="freecodecamp-logo-contenedor"
        imagen={ImagenLogo}
        logoClase='freecodecamp-logo'
        nombre='freeCodeCamp'
        />
      <div className='contenedor-calculadora'>
          <Pantalla input={input}/>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
          <BotonClear manejarClear={() => setInput('')} segundaClase=''>Clear</BotonClear>
          <BotonClear manejarClear={eliminarUltimo} segundaClase=' segundo'>⌫</BotonClear></div>
      </div>
    </div>
  );
}

export default App;
