import {useState} from 'react'
import React from 'react'

const Contador = () => {

    //Hook-useState - manipula o estado da variavel

    const[contador, setContador]=useState(0)

  return (
    <>
      <h1>Meu contador</h1>

      <p>Você clicou: {contador} vezes</p>
      <button onClick = {()=>setContador(contador +1)} >Aumentar</button>
      <button onClick = {()=>setContador(contador -1)} >Diminuir</button>

    </>
  )
}

export default Contador
