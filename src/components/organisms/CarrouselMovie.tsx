import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import styled from 'styled-components';
import { SwiperProps, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

import BaseCarrousel, { BaseCarrouselRef } from '../base/BaseCarrousel';

import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import Badge from '../atoms/Badge';
import Icon from '../atoms/Icon';

interface CarrouselMovieProps extends SwiperProps {
    enableVerticalOnDesktop?: boolean;
}

export interface CarrouselMovieRef extends BaseCarrouselRef {}

const CarrouselMovie: React.ForwardRefRenderFunction<CarrouselMovieRef, CarrouselMovieProps> = (
    { enableVerticalOnDesktop, ...props },
    ref
) => {
    const baseCarrouselRef = useRef<BaseCarrouselRef>(null);

    useImperativeHandle(
        ref,
        () => ({
            slideNext: () => baseCarrouselRef.current?.slideNext(),
            slidePrev: () => baseCarrouselRef.current?.slidePrev(),
        }),
        []
    );

    return (
        <BaseCarrousel
            slidesPerView={'auto'}
            spaceBetween={12}
            style={{ maxHeight: '49.125rem', position: 'relative' }}
            breakpoints={{
                1024: {
                    direction: enableVerticalOnDesktop ? 'vertical' : 'horizontal',
                },
            }}
            ref={baseCarrouselRef}
            {...props}
        >
            {fake_data.map((data) => (
                <SwiperSlideOverride key={data.key}>
                    <CardMovie>
                        <BadgeOverride
                            config={{
                                iconColor: 'yellow',
                                label: '7.8',
                                icon: 'star',
                            }}
                        />
                        <ImageOverride src={data.src} />

                        <HeadingOverride
                            config={{
                                fontWeight: '700',
                                fontSize: '12',
                                color: 'white',
                            }}
                        >
                            Deadpool & Wolverine
                        </HeadingOverride>

                        <ButtonOverride config={{ variant: 'transparent-button' }}>
                            <span>Assitir ao trailer</span>

                            <Icon
                                config={{
                                    color: 'white',
                                    icon: 'play-right',
                                    size: 20,
                                }}
                            />
                        </ButtonOverride>
                    </CardMovie>
                </SwiperSlideOverride>
            ))}
        </BaseCarrousel>
    );
};

export default forwardRef(CarrouselMovie);

const fake_data = [
    { key: 1, src: 'https://image.tmdb.org/t/p/w780/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg' },
    { key: 2, src: 'https://image.tmdb.org/t/p/w780/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg' },
    { key: 3, src: 'https://image.tmdb.org/t/p/w780/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg' },
    { key: 4, src: 'https://image.tmdb.org/t/p/w780/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg' },
    { key: 5, src: 'https://image.tmdb.org/t/p/w780/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg' },
    { key: 6, src: 'https://image.tmdb.org/t/p/w780/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg' },
    { key: 7, src: 'https://image.tmdb.org/t/p/w780/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg' },
];

const SwiperSlideOverride = styled(SwiperSlide)`
    height: ${({ theme }) => theme.utils.pxToRem(284)};
    width: ${({ theme }) => theme.utils.pxToRem(166)};

    ${({ theme }) =>
        theme.utils.screen('md', `width: ${theme.utils.pxToRem(380)}; height: ${theme.utils.pxToRem(253)};`)}
`;

const CardMovie = styled.div`
    height: 100%;
    width: 100%;
    position: relative;

    overflow: hidden;

    transition: transform 0.3s ease-out;

    &::before {
        content: '';
        position: absolute;
        bottom: -140%;
        left: 0;
        width: 100%;
        height: 140%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 17.12%, rgba(0, 0, 0, 0.7) 100%);
        transition: bottom 0.3s ease-in;
        pointer-events: none;
        z-index: 1;
    }

    &:hover {
        &::before {
            bottom: 0;
        }
    }
`;

const ImageOverride = styled(Image)`
    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};
    z-index: 2;
`;

const BadgeOverride = styled(Badge)`
    position: absolute;

    top: ${({ theme }) => theme.ref.spacing['12']};
    left: ${({ theme }) => theme.ref.spacing['12']};

    z-index: 2;
`;

const ButtonOverride = styled(Button)`
    position: absolute;

    bottom: ${({ theme }) => theme.ref.spacing['12']};
    left: ${({ theme }) => theme.ref.spacing['12']};

    z-index: 2;
`;

const HeadingOverride = styled(Heading)`
    position: absolute;

    ${({ theme }) => theme.utils.screen('md', `font-size: ${theme.ref.fontSize['24']};`)}

    left: ${({ theme }) => theme.ref.spacing['12']};

    bottom: ${({ theme }) => theme.ref.spacing['48']};
    ${({ theme }) => theme.utils.screen('md', `bottom: ${theme.utils.pxToRem(71)};`)}

    font-weight: ${({ theme }) => theme.ref.fontWeight['600']};
    ${({ theme }) => theme.utils.screen('md', `font-weight: ${theme.ref.fontWeight['700']};`)}

    z-index: 2;
`;

const CardMovieLoader = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(284)};
    width: ${({ theme }) => theme.utils.pxToRem(166)};

    ${({ theme }) =>
        theme.utils.screen('md', `width: ${theme.utils.pxToRem(380)}; height: ${theme.utils.pxToRem(253)};`)}

    border: ${({ theme }) => theme.utils.pxToRem(1)} solid ${({ theme }) => theme.ref.colors['secondary-borders-6']};

    justify-content: center;
    align-items: center;
    display: flex;

    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};
`;
