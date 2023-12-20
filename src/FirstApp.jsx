import PropTypes from 'prop-types';

// const newMessage = {
//     message: "Hola mundo",
//     titulo: "Hola"
// };

// const getResult = (a, b) => {
//     return a + b;
// };


export const FirstApp = ( { title, subTitle, name } ) => {
    
    return( 
        <>
            {/* <h1> { getResult(10, 20) } </h1> */}
            {/* <code>{ JSON.stringify( newMessage) }</code>  */}
            <h1 data-testid = "test-title"> { title } </h1>
            <p> { subTitle } </p>
            <p> { subTitle } </p>
            <p> { name } </p>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
};

FirstApp.defaultProps = { 
    name: 'lolox',
    subTitle: 'chocotito',
    // title: 'No hay titulo'
}