import { Suspense, useRef } from 'react';
import { Await } from 'react-router';
import styled from 'styled-components';

import Button from '../../components/atoms/Button';
import Icon from '../../components/atoms/Icon';

import HeadingWithBar from '../../components/organisms/HeadingWithBar';
import CardMovieHighlight, { CardMovieHighlightSkeleton } from '../../components/organisms/CardMovieHighlight';
import CarrouselMovie, {
    CarrouselCardMovieSkeleton,
    CarrouselMovieRef,
} from '../../components/organisms/CarrouselMovie';
import {
    CarrouselActor,
    CarrouselActorRef,
    CarrouselCardActorSkeleton,
} from '../../components/organisms/CarrouselActor';

import {
    getAllActorsLoader,
    highlightMovieDetailLoader,
    highlightMoviesLoader,
    latestReleaseMoviesLoader,
    recommendedMoviesLoader,
} from './loader';

function Home() {
    const carrouselLatestReleaseRef = useRef<CarrouselMovieRef>(null);
    const carrouselRecommendedRef = useRef<CarrouselMovieRef>(null);
    const carrouselActorRef = useRef<CarrouselActorRef>(null);

    return (
        <>
            <SectionHighlight data-testid="section-highlight">
                <Suspense fallback={<CardMovieHighlightSkeleton />}>
                    <Await resolve={highlightMovieDetailLoader()}>
                        {(resolvedHighlightMovieDetail) => (
                            <CardMovieHighlight
                                highlightMovie={resolvedHighlightMovieDetail}
                                data-testid="card-movie-highlight"
                            />
                        )}
                    </Await>
                </Suspense>

                <SectionHighligsToo data-testid="section-destaques-tambem">
                    <HeadingWithBar
                        data-testid="title-highlighs-too"
                        config={{
                            fontWeight: '600',
                            fontSize: '16',
                            color: 'secondary-accessible-text-12',
                        }}
                    >
                        Destaques também
                    </HeadingWithBar>

                    <div>
                        <Suspense fallback={<CarrouselCardMovieSkeleton />}>
                            <Await resolve={highlightMoviesLoader()}>
                                {(resolvedHighlightsToo) => (
                                    <CarrouselMovie
                                        enableVerticalOnDesktop
                                        movies={resolvedHighlightsToo.results ?? undefined}
                                    />
                                )}
                            </Await>
                        </Suspense>
                    </div>
                </SectionHighligsToo>
            </SectionHighlight>

            <SectionCarrousel data-testid="section-latest-releases">
                <TitleCarrouselContainer>
                    <HeadingWithBar
                        data-testid="title-latest-releases"
                        config={{
                            fontWeight: '600',
                            fontSize: '16',
                            color: 'secondary-accessible-text-12',
                        }}
                    >
                        Ultimos lançamentos
                    </HeadingWithBar>

                    <ButtonNextPrev>
                        <Button
                            data-testid="section-latest-releases-prev"
                            onClick={() => carrouselLatestReleaseRef.current?.slidePrev()}
                            config={{ variant: 'rounded-icon-button' }}
                            style={{ background: 'none', position: 'relative', top: '0.5rem' }}
                        >
                            <Icon
                                config={{
                                    color: 'white',
                                    icon: 'chevron-left',
                                    size: 20,
                                }}
                            />
                        </Button>

                        <Button
                            config={{ variant: 'rounded-icon-button' }}
                            data-testid="section-latest-releases-next"
                            onClick={() => carrouselLatestReleaseRef.current?.slideNext()}
                            style={{ background: 'none', position: 'relative', top: '0.5rem' }}
                        >
                            <Icon
                                config={{
                                    color: 'white',
                                    icon: 'chevron-right',
                                    size: 20,
                                }}
                            />
                        </Button>
                    </ButtonNextPrev>
                </TitleCarrouselContainer>

                <div>
                    <Suspense fallback={<CarrouselCardMovieSkeleton inline={'true'} />}>
                        <Await resolve={latestReleaseMoviesLoader()}>
                            {(resolvedLatestReleases) => (
                                <CarrouselMovie
                                    movies={resolvedLatestReleases.results ?? undefined}
                                    ref={carrouselLatestReleaseRef}
                                />
                            )}
                        </Await>
                    </Suspense>
                </div>
            </SectionCarrousel>

            <SectionCarrousel data-testid="section-recommended">
                <TitleCarrouselContainer>
                    <HeadingWithBar
                        data-testid="title-recommended"
                        config={{
                            fontWeight: '600',
                            fontSize: '16',
                            color: 'secondary-accessible-text-12',
                        }}
                    >
                        Recomendados
                    </HeadingWithBar>

                    <ButtonNextPrev>
                        <Button
                            data-testid="section-recommended-prev"
                            onClick={() => carrouselRecommendedRef.current?.slidePrev()}
                            config={{ variant: 'rounded-icon-button' }}
                            style={{ background: 'none', position: 'relative', top: '0.5rem' }}
                        >
                            <Icon
                                config={{
                                    color: 'white',
                                    icon: 'chevron-left',
                                    size: 20,
                                }}
                            />
                        </Button>

                        <Button
                            config={{ variant: 'rounded-icon-button' }}
                            data-testid="section-recommended-next"
                            onClick={() => carrouselRecommendedRef.current?.slideNext()}
                            style={{ background: 'none', position: 'relative', top: '0.5rem' }}
                        >
                            <Icon
                                config={{
                                    color: 'white',
                                    icon: 'chevron-right',
                                    size: 20,
                                }}
                            />
                        </Button>
                    </ButtonNextPrev>
                </TitleCarrouselContainer>

                <div>
                    <Suspense fallback={<CarrouselCardMovieSkeleton inline={'true'} />}>
                        <Await resolve={recommendedMoviesLoader()}>
                            {(resolvedRecommended) => (
                                <CarrouselMovie
                                    movies={resolvedRecommended.results ?? undefined}
                                    ref={carrouselRecommendedRef}
                                />
                            )}
                        </Await>
                    </Suspense>
                </div>
            </SectionCarrousel>

            <SectionCarrousel data-testid="section-celebrities">
                <TitleCarrouselContainer>
                    <HeadingWithBar
                        data-testid="title-celebrities"
                        config={{
                            fontWeight: '600',
                            fontSize: '16',
                            color: 'secondary-accessible-text-12',
                        }}
                    >
                        Celebridades
                    </HeadingWithBar>

                    <ButtonNextPrev>
                        <Button
                            data-testid="section-celebrities-prev"
                            onClick={() => carrouselActorRef.current?.slidePrev()}
                            config={{ variant: 'rounded-icon-button' }}
                            style={{ background: 'none', position: 'relative', top: '0.5rem' }}
                        >
                            <Icon
                                config={{
                                    color: 'white',
                                    icon: 'chevron-left',
                                    size: 20,
                                }}
                            />
                        </Button>

                        <Button
                            config={{ variant: 'rounded-icon-button' }}
                            data-testid="section-celebrities-next"
                            onClick={() => carrouselActorRef.current?.slideNext()}
                            style={{ background: 'none', position: 'relative', top: '0.5rem' }}
                        >
                            <Icon
                                config={{
                                    color: 'white',
                                    icon: 'chevron-right',
                                    size: 20,
                                }}
                            />
                        </Button>
                    </ButtonNextPrev>
                </TitleCarrouselContainer>

                <div>
                    <Suspense fallback={<CarrouselCardActorSkeleton />}>
                        <Await resolve={getAllActorsLoader()}>
                            {(resolvedActors) => (
                                <CarrouselActor actors={resolvedActors.results ?? undefined} ref={carrouselActorRef} />
                            )}
                        </Await>
                    </Suspense>
                </div>
            </SectionCarrousel>
        </>
    );
}

export default Home;

const SectionHighlight = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;

    padding: 0 ${({ theme }) => theme.ref.padding['12']};

    ${({ theme }) => theme.utils.screen('md', `padding-top: 0 !important;`)}

    ${({ theme }) =>
        theme.utils.screen(
            'lg',
            `
                justify-content: space-between;
                flex-direction: row;
                gap: ${theme.ref.spacing['12']};

                 ${theme.utils.screen('lg', `${theme.utils.container()}`)}

        `
        )}
`;

const SectionHighligsToo = styled.div`
    width: 100%;
    height: 100%;

    ${({ theme }) => theme.utils.screen('lg', `max-width: ${theme.utils.pxToRem(380)};`)}

    padding: ${({ theme }) => theme.ref.padding['24']} 0;

    ${({ theme }) => theme.utils.screen('lg', `padding: 0;`)}

    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['24']};

    ${({ theme }) => theme.utils.screen('lg', `gap: ${theme.ref.spacing['12']};`)}
`;

const SectionCarrousel = styled.div`
    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['24']};

    ${({ theme }) => theme.utils.container()}

    padding-top:0 !important;
`;

const TitleCarrouselContainer = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
`;

const ButtonNextPrev = styled.div`
    align-items: center;
    display: none;
    gap: ${({ theme }) => theme.ref.spacing['12']};

    ${({ theme }) => theme.utils.screen('md', `display: flex;`)}
`;
