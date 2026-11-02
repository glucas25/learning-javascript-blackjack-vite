import { pedirCarta, valorCarta, crearCartaHTML } from './index.js';



/**
 * Ejecuta el turno de la computadora
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck 
 * @param {HTMLElement} labelPuntosComputadora
 * @returns {void}
 */
export const turnoComputadora = ( puntosMinimos,deck, PuntosHTML, divCartasComputadora ) => {
    let puntosComputadora = 0;    
    do {
        const carta = pedirCarta(deck);

        
        puntosComputadora = puntosComputadora + valorCarta( carta );
        PuntosHTML.innerText = puntosComputadora;
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
