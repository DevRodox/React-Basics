import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', ()=>{
    test('usContext debe devolver un objeto', () => {

        const persona = {
            clave: 'ABC123',
            nombre: 'Juan',
            edad: 23
        }

        const objTest = usContext(persona);

        const { clave, edad } = persona;

        expect(objTest).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });
});
