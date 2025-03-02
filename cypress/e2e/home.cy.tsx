describe('Home', () => {
    beforeEach(() => cy.visit('/'));

    describe('TODO', () => {
        it('Deve renderizar o header', () => {
            cy.log('Deve renderizar o header');
            cy.log('Ao realizar a busca do filme deve mostrar a lista de filmes correspondentes a busca');
            cy.log('Ao clicar no filme listado, deve redirecionar para a pagina do filme clicado');
        });

        it('Deve renderizar os filmes em destaque', () => {
            cy.log('Deve renderizar a seção filmes em destaque');
            cy.log('Ao clicar no botão Assitir ao trailer, deve ser redirecionado para a pagina do filme.');
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
