import { render, screen } from '../../../core/utils/test-utils/testing-library';

import CarrouselMovie from '../../../components/organisms/CarrouselMovie';

interface SwiperMockProps {
    children: React.ReactNode;
}

jest.mock('swiper/react', () => ({
    Swiper: ({ children }: SwiperMockProps) => <div data-testid="carrousel-movie">{children}</div>,
    SwiperSlide: ({ children }: SwiperMockProps) => <div data-testid="carrousel-movie-item">{children}</div>,
}));

describe('Deve renderizar o CarrouselMovie corretamente', () => {
    beforeEach(() => render(<CarrouselMovie data-testid="carrousel-movie" />));

    it('Deve renderizar o Carrousel', () => {
        const carrouselMovie = screen.getByTestId('carrousel-movie');

        expect(carrouselMovie).toBeInTheDocument();
    });

    it('Deve renderizar pelo menos 1 filme', () => {
        const carrouselMovieItem = screen.getAllByTestId('carrousel-movie-item');
        expect(carrouselMovieItem).not.toHaveLength(0);
    });
});
