import sole from '../assets/sole.svg';
import nuvoloso from '../assets/nuvoloso.svg';
import pioggia from '../assets/pioggia.svg';

export default function Meteo() {
  let temperatura = 23;
  let umidita = 6;
  let meteo = 1;

  let immagine;
  let descrizione;

  switch (meteo) {
    case 1:
      immagine = sole;
      descrizione = "Sereno";
      break;
    case 2:
      immagine = nuvoloso;
      descrizione = "Nuvoloso";
      break;
    case 3:
      immagine = pioggia;
      descrizione = "Pioggia";
      break;
    default:
      immagine = "/sconosciuto.svg";
      descrizione = "Dato non disponibile";
  }

  return (
    <div className='container'>
      <img
        src={immagine}
        alt={descrizione}
        style={{
          display: 'block',
          width: '150px',
          margin: '0 auto'
        }}
      />
      <p id='descrizioneMeteo'>Condizione: {descrizione}</p>
      <p>Temperatura: {temperatura} °C</p>
      <p>Umidità: {umidita}%</p>
    </div>
  );
}