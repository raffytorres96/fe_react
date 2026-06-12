import { useState, useEffect } from 'react';
import styles from './Orologio.module.css';

// funzione figlia
function OrologioFiglio() {
    const [ora, setOra] = useState(new Date());

    useEffect(() => {
        // intervallo= identificativo restituito da setInterval
        const intervallo = setInterval(() => {
            setOra(new Date())
        }, 1000);
    return () => clearInterval(intervallo)}, []);

    return <div className={styles.orologio}>{ora.toLocaleTimeString()}</div>
} // fine funzione figlia

//componente padre che monta e smonta la funzione orologio

export default function Orologio() {
    const [visibile, setVisibile] = useState(true);
  return (
    <div>
        <OrologioFiglio />
    </div>
  );
}