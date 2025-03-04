describe('Home', () => {
    beforeEach(() => cy.visit('/'));

    describe('TODO', () => {
        it('Deve renderizar o header', () => {
            cy.get('header');
            cy.get('[data-testid="search"]').type('test');
            cy.get('[data-testid="header-form-search-btn-search"]').click();
            cy.get('[data-testid="movie-item-1"]').click();
            cy.url().should('match', /\/movie\/\d+$/);
        });

        it('Deve renderizar os filmes em destaque', () => {
            cy.get('[data-testid="section-destaques-tambem"]');
            cy.get('[data-testid="card-movie-assistir-trailer-0"]').click();
            cy.url().should('match', /\/movie\/\d+$/);
        });

        it('Deve renderizar os ultimos lançamentos', () => {
            cy.log('Deve renderizar a seção ultimos lançamentos');
            cy.log('Ao clicar no botão Assitir ao trailer, deve ser redirecionado para a pagina do filme.');
        });

        it('Deve renderizar os filmes recomendados', () => {
            cy.log('Deve renderizar a seção filmes recomendados');
            cy.log('Ao clicar no botão Assitir ao trailer, deve ser redirecionado para a pagina do filme.');
        });

        it('Deve renderizar as celebridades', () => {
            cy.log('Deve renderizar a seção celebridades');
        });
    });
});
