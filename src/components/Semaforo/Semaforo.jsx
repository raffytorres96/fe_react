import { useState } from 'react';
import styles from './Semaforo.module.css';
import Box from '../Box/Box';

const colori = ['red', 'yellow', 'green'];

export default function Semaforo() {
  const [indice, setIndice] = useState(0);
  const colore = colori[indice];

  function cambiaStato() {
    setIndice(prev => {
      if (prev + 1 >= colori.length) {
        return 0;
      }
      return prev + 1;
    });
  }

  return (
    <Box colore="black">
      <div className={styles.risultato}>
        <h2>Il semaforo è:</h2>
        <div className={styles.cerchio} style={{ backgroundColor: colore }}>
          {colore}
        </div>
      </div>
      <button className={styles.bottone} onClick={cambiaStato}>
        Cambia stato
      </button>
    </Box>
  );
}