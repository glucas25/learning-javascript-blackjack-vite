import _ from 'underscore';
// Esta función crea un nuevo deck

export const miNombre='Gabriel';

/**
 * Crea un nuevo deck de cartas
 * @param {Array<string>} tiposCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>} regresa un nuevo deck de cartas
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {
    if ( !tiposCarta || tiposCarta.length === 0 ) throw new Error('tiposCarta es obligatorio como un arreglo de string');
    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('tiposEspeciales es obligatorio como un arreglo de string');
    
    let deck = [];
  
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
  
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

export default crearDeck;