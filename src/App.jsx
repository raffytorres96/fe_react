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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Utente />
      {/* <Biglietto nome="Giacomo" destinazione="Roma"/>
      <Biglietto nome="Emma" destinazione="Bari"/>
      <Biglietto nome="Marta" destinazione="Como"/>
      <Biglietto destinazione="Marrachesh"/>
      <h2>METEO INFO</h2>
      <Meteo />
      <Card />
      <Card2 /> */}
    </>
  );
}

export default App
