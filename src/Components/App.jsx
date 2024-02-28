import { useState } from 'react'
import '../css/App.css'

function App() {
  //declaro un hook de estado, nuestro componente tiene un estado
  const [contador, setContador] = useState(15); //number
  const [darkMode, setDarkMode] = useState(false); //booleano

  // mandar alerta fija
  function alertaRoja() {
    alert('alerta roja SOS');
  }

  // pasar valor con variable
  let nro1 = 2
  function variable() {
    alert(`funcion variable: ${nro1}`);
  }

  //pasamos variable
  let index = 2
  function handleClick() {
    index = index + 1;
    console.log(index);
  }

  //pasar un string
  function colocarString() {
    setAcumulador('Clase77i');
  }

  //modo noche
  function switchDarkMode() {
    setDarkMode(true);
  }

  if (darkMode === true) {
    console.log('dark ON');
  } else {
    console.log('dark OFF');
  }

  


  return (
    <div /* style={{ backgroundColor: 'gray'}} */>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setContador((count) => count + 1)}>
          count is {contador}
        </button>
      </div >
      <div className='card'>
        <button onClick={alertaRoja}>
          CLICK ME!
        </button>
      </div>
      {/* Boton anclado con un evento */}
      <div className='card'>
        <button onClick={variable}>
          CLICK ME!
        </button>
      </div>
      <div className='card'>
        <p>{index}</p>
        <button onClick={handleClick}>
          CLICK ME!
        </button>
      </div>
      <div className='card'>
        <button onClick={colocarString}>
          CLICK ME!
        </button>
      </div>
      <div className='card'>
        <button onClick={switchDarkMode}>
          CLICK ME!
        </button>
      </div>
      <div>
        {darkMode === true ?
          <p>ES DE NOCHE DARKMODE</p>
          :
          <p>ES DE DIA, NO ES DARKMODE</p>
        }
      </div>
    </div>
  )
}

export default App
