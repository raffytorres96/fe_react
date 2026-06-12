import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Biglietto from './components/Biglietto.jsx'
import Meteo from './components/Meteo.jsx'
import Card from './components/Card/Card.jsx'
import Card2 from './components/Card2/Card2.jsx'
import Utente from './components/Utente/Utente.jsx'
import Box from './components/Box/Box.jsx'
import Contatore from './components/Contatore/Contatore.jsx'
import Semaforo from './components/Semaforo/Semaforo.jsx'
import Orologio from './components/Orologio/Orologio.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Utente /> */}
      {/* <Biglietto nome="Giacomo" destinazione="Roma"/>
      <Biglietto nome="Emma" destinazione="Bari"/>
      <Biglietto nome="Marta" destinazione="Como"/>
      <Biglietto destinazione="Marrachesh"/>
      <h2>METEO INFO</h2>
      <Meteo />
      <Card />
      <Card2 /> */}
      {/* <Box colore="green">
        <h2>Titolo Box1</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora temporibus eum ullam sed odit necessitatibus beatae unde illum magni dolorum iste repellendus incidunt, doloremque labore at suscipit. Corrupti, quos aspernatur.</p>
      </Box>
      <Box colore="red">
        <p>Ecco un altro box</p>
        <Box colore="blue">
          <p>Con dentro un altro box</p>
        </Box>
      </Box> */}
      {/* <Contatore /> */}
      {/* <Semaforo /> */}
      <Orologio />
    </>
  );
}

export default App
