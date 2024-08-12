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

const fake_data = [
    { key: 1, src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { key: 2, src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { key: 3, src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { key: 4, src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { key: 5, src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { key: 6, src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { key: 7, src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { key: 8, src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { key: 9, src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { key: 10, src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { key: 11, src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
];

interface CarrouselActorProps extends SwiperProps {}

export interface CarrouselActorRef extends BaseCarrouselRef {}

const CarrouselActor: React.ForwardRefRenderFunction<CarrouselActorRef, CarrouselActorProps> = (props, ref) => {
    const baseCarrouselRef = useRef<BaseCarrouselRef>(null);

    useImperativeHandle(
        ref,
        () => ({
            slideNext: () => baseCarrouselRef.current?.slideNext(),
            slidePrev: () => baseCarrouselRef.current?.slidePrev,
        }),
        []
    );

    return (
        <BaseCarrousel
            slidesPerView={'auto'}
            spaceBetween={12}
            style={{ maxHeight: '49.125rem', position: 'relative' }}
            {...props}
            ref={baseCarrouselRef}
        >
            {fake_data.map((data) => (
                <SwiperSlideOverride key={data.key}>
                    <CardActor>
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
                    </CardActor>
                </SwiperSlideOverride>
            ))}
        </BaseCarrousel>
    );
};

export default forwardRef(CarrouselActor);

const SwiperSlideOverride = styled(SwiperSlide)`
    height: ${({ theme }) => theme.utils.pxToRem(284)};
    width: ${({ theme }) => theme.utils.pxToRem(166)};

    ${({ theme }) =>
        theme.utils.screen('md', `width: ${theme.utils.pxToRem(380)}; height: ${theme.utils.pxToRem(253)};`)}
`;

const CardActor = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

const ImageOverride = styled(Image)`
    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};
`;

const BadgeOverride = styled(Badge)`
    position: absolute;

    top: ${({ theme }) => theme.ref.spacing['12']};
    left: ${({ theme }) => theme.ref.spacing['12']};
`;

const ButtonOverride = styled(Button)`
    position: absolute;

    bottom: ${({ theme }) => theme.ref.spacing['12']};
    left: ${({ theme }) => theme.ref.spacing['12']};
`;

const HeadingOverride = styled(Heading)`
    position: absolute;

    ${({ theme }) => theme.utils.screen('md', `font-size: ${theme.ref.fontSize['24']};`)}

    left: ${({ theme }) => theme.ref.spacing['12']};

    bottom: ${({ theme }) => theme.ref.spacing['48']};
    ${({ theme }) => theme.utils.screen('md', `bottom: ${theme.utils.pxToRem(71)};`)}

    font-weight: ${({ theme }) => theme.ref.fontWeight['600']};
    ${({ theme }) => theme.utils.screen('md', `font-weight: ${theme.ref.fontWeight['700']};`)}
`;
