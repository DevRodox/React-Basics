import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => { 

    test('getImagen debe retornar un URL de la imagen', async() => {
        
        const resp = await getImagen(); 
        expect( typeof resp ).toBe('string');
    });

    test('getImagen debe retornar no se encontro la imagen', async() => {
        
        const resp = await getImagen();
        
        expect( resp ).toBe('No se encontro la imagen');
    });
});


