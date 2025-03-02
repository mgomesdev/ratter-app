describe('Home', () => {
    it('Deve abrir a home', () => {
        cy.visit('/');
    });

    it('Deve abrir a home a logo', () => {
        cy.visit('/');

        cy.get("[data-testid='header-logo']");
    });
});
