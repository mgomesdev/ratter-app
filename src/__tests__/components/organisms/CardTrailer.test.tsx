import { MemoryRouter } from 'react-router';

import { render, screen } from '../../../core/utils/test-utils/testing-library';

import CardTrailer from '../../../components/organisms/CardTrailer/CardTrailer';

import movieDetailMock from '../../../../cypress/fixtures/movie/movie-fixture.json';

describe('Deve renderizar o CardTrailer, corretamente', () => {
    beforeEach(() =>
        render(
            <MemoryRouter>
                <CardTrailer movieDetail={movieDetailMock} />
            </MemoryRouter>
        )
    );
    it("Deve renderizar o botão 'Assistir ao Trailer'", () => {
        const button = screen.getByTestId('btn-assistir-ao-trailer');
        expect(button).toBeInTheDocument();
    });
});
