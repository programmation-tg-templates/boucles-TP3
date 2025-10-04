// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import {boucle3} from '../index';

describe('La fonction boucle 3 doit retourner', () => {
    test('une demi-pyramide à 1 étage', () => {
        expect(boucle3(1)).toBe('*\n');
    });

    test('une demi-pyramide à 3 étages', () => {
        expect(boucle3(3)).toBe('*\n**\n***\n');
    });

    test('une demi-pyramide à 5 étages', () => {
        expect(boucle3(5)).toBe('*\n**\n***\n****\n*****\n');
    });
});
