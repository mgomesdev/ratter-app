import { render, screen } from '../../../core/utils/test-utils/testing-library';

import CarrouselCategory from '../../../components/organisms/CarrouselCategory';

import movieDetailMock from '../../../../cypress/fixtures/movie/movie-fixture.json';

interface SwiperMockProps {
    children: React.ReactNode;
}

jest.mock('swiper/react', () => ({
    Swiper: ({ children }: SwiperMockProps) => <div data-testid="carrousel-movie">{children}</div>,
    SwiperSlide: ({ children }: SwiperMockProps) => <div data-testid="carrousel-movie-item">{children}</div>,
    useSwiper: jest.fn(),
}));

describe('Deve renderizar o CarrouselCategory corretamente', () => {
    beforeEach(() => render(<CarrouselCategory data-testid="carrousel-movie" genres={movieDetailMock.genres} />));

    it('Deve renderizar o Carrousel', () => {
        const CarrouselCategory = screen.getByTestId('carrousel-movie');

        expect(CarrouselCategory).toBeInTheDocument();
    });

    it('Deve renderizar pelo menos 1 filme', () => {
        const CarrouselCategoryItem = screen.getAllByTestId('carrousel-movie-item');
        expect(CarrouselCategoryItem).not.toHaveLength(0);
    });
});
