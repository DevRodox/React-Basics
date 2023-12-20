import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en CounterApp', () => {

    const initialValue = 10;

    test('Debe hacer match con el snapshot', () => {

        const { container } = render( <CounterApp value={ initialValue }/>);
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de 100', () => {

        render( <CounterApp value={ initialValue } />)
        expect( screen.getByText( 10 ) ).toBeTruthy();
        // expect( screen.getByRole('heading',{ level: 2 }).innerHTML ).toContain('100');
    });

    test('debe de incrementar con el boton +1', () => {
        
        render( <CounterApp value={ initialValue }/>);
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText( initialValue + 1 ) ).toBeTruthy;
    });

    test('debe decrementar con el boton -1', () => {
        
        render( <CounterApp value={ initialValue }/>);
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText( initialValue - 1 ) ).toBeTruthy;
    });

    test('debe funcionar el boton de reset', () => {

        render( <CounterApp value={ initialValue }/>);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}));

        expect( screen.getByText( initialValue )).toBeTruthy(); 
    });
});