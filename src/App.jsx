import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className='Contenedor_Principal'>
      <div className='Contenedor_Secundario'>
        <div className='Cuerpo'>

          <h1>Contador Manual</h1>
          <div className='Contenido'>
            <h2>{count}</h2>
            <button className='Btn_Sumar' onClick={()=>setCount(count + 1)}>Sumar</button>
            <button className='Btn_Reiniciar' onClick={()=>setCount(0)}>Reiniciar</button>
            <button className='Btn_Restar' onClick={()=>setCount(count - 1)}>Restar</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
