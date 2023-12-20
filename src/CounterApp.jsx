import { useState } from 'react';
import PropTypes from 'prop-types';

// const handleAdd = ( { target } ) => {
//     console.log(target);
// };

export const CounterApp = ( { value } ) => {
        
    const [ counter, setCounter ] = useState( value );
    //Al cambiar el estado todo el componente se vuelve a renderizar. useState mantiene su valor.

    const handleAdd = () => {
       setCounter( counter + 1);
       //setCounter( (c) => c + 1 );
    };

    const handleSubtract = () => setCounter( counter - 1 );  

    const handleReset = () => setCounter(value);

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubtract }> -1 </button>
            <button aria-label='btn-reset' onClick={ handleReset } > Reset </button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}