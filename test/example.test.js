const NormesOuvertes = require('../index');

describe('NormesOuvertes', () => {
    test('utiliserNorme retourne les données pour la norme', () => {
        expect(NormesOuvertes.utiliserNorme('exempleNorme')).toBe('Données extraites pour la norme: exempleNorme');
    });
});
