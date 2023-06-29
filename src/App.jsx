
import './App.css'

import FortuneCookie from './components/FortuneCookie'
import phrases from './data/phrases.json'
import { useState } from 'react'

function App() {


  const [index, setIndex] = useState(0)

  const changeFortune = () => {
    
    if (index < phrases.length + 1) {
      setIndex(Math.floor(Math.random() * phrases.length))
    } 

  }

  const images = [] 

  images[0] = "../src/img/fondo1.jpg"
  images[1] = "../src/img/fondo2.jpg"
  images[2] = "../src/img/fondo3.jpg"
  images[3] = "../src/img/fondo4.jpg"


  
 // window.onload = function () {
    const setImage = Math.floor(Math.random() * images.length - 1);
    document.body.style = `background-image: url(${ images[setImage] }) `;
    
  //}  

  return (
    <>
      <FortuneCookie
      data = {phrases[index]}
      />
      <div className='button'>
        <button onClick = {changeFortune} > 
        See Another
        </button>
      </div>
      
    </>
  )

}

export default App
