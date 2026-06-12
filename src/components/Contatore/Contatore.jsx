import Box from '../Box/Box.jsx';
import styles from './Contatore.module.css';
import { useState } from 'react';

export default function Contatore() {
    const [contatore, setContatore] = useState(0);
    const [contatori, setContatori] = useState({
        contatore1: 0,
        contatore2: 0,
        contatore3: 0,
    });

    return (
        <>
            <Box>
                <p> Contatore: {contatore} </p>
                {/* <button onClick={() => setContatore(contatore + 2)}>+2</button> */}
                <button onClick={() => setContatore(0)}>reset</button>
                <button onClick={() => setContatore(contatore - 2)}>-2</button>
            </Box>
            <Box>
                <p> Contatore1: {contatori.contatore1} </p>
                <p> Contatore2: {contatori.contatore2} </p>
                <p> Contatore3: {contatori.contatore3} </p>
                <button onClick={() => setContatori(prev => ({ ...prev, contatore1: prev.contatore1 + 1 }))}>Incrementa cont1</button>
                <button onClick={() => setContatori({ contatore1: 10, contatore2: 20, contatore3: 30 })}>Cambia tutti</button>
                <button onClick={() => setContatori(prev => ({
                    contatore1: prev.contatore1 + 2,
                    contatore2: prev.contatore2 + 2,
                    contatore3: prev.contatore3 + 2,
                }))
                }
                >Aumenta tutti di 2</button>
                <button onClick={() => setContatori(prev => ({
                    contatore2: prev.contatore1 + 2,
                }))
                }
                >Aumenta il contatore2 rispetto al contatore1</button>
            </Box>
        </>
    );
}