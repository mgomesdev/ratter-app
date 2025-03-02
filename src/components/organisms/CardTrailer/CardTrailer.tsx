import styled from 'styled-components';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';

import { MovieDetailSchema } from '../../../schemas/MovieSchema';
import { useCallback, useState } from 'react';

interface CardTrailerProps extends React.HTMLAttributes<HTMLDivElement> {
    movieDetail: MovieDetailSchema | undefined;
}

export default function CardTrailer({ movieDetail, ...props }: CardTrailerProps) {
    const [showTrailler, setShowTrailler] = useState(false);

    const handleShowTrailler = useCallback(() => setShowTrailler((prev) => !prev), []);

    return (
        <>
            <CardTrailerStyled movie={movieDetail} {...props}>
                {movieDetail && movieDetail.videos && movieDetail.videos.results.length > 0 && (
                    <CardTrailerContent>
                        <ButtonOverride
                            data-testid="btn-assistir-ao-trailer"
                            onClick={handleShowTrailler}
                            config={{ variant: 'transparent-button' }}
                            style={{ zIndex: 2 }}
                        >
                            <span>Assitir ao trailer</span>

                            <Icon
                                config={{
                                    color: 'white',
                                    icon: 'play-right',
                                    size: 20,
                                }}
                            />
                        </ButtonOverride>

                        {showTrailler && (
                            <Iframe
                                allowFullScreen
                                frameBorder="0"
                                loading="lazy"
                                title={movieDetail.videos.results[0].name}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                src={`https://www.youtube.com/embed/${movieDetail.videos.results[0].key}?&modestbranding=1`}
                            />
                        )}
                    </CardTrailerContent>
                )}
            </CardTrailerStyled>

            {showTrailler && (
                <ButtonClose onClick={handleShowTrailler} config={{ variant: 'transparent-button' }}>
                    <span>Fechar Trailer</span>

                    <Icon
                        config={{
                            color: 'white',
                            icon: 'close',
                            size: 24,
                        }}
                    />
                </ButtonClose>
            )}
        </>
    );
}

interface CardTrailerStyledProps {
    movie: MovieDetailSchema | undefined;
}

const CardTrailerStyled = styled.div<CardTrailerStyledProps>`
    width: 100%;
    height: 100%;

    min-height: ${({ theme }) => theme.utils.pxToRem(200)};

    ${({ theme }) => theme.utils.screen('md', `height: ${theme.utils.pxToRem(476)};`)}
    ${({ theme }) => theme.utils.screen('lg', `height: ${theme.utils.pxToRem(476)};`)}

    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};

    flex-direction: column;

    ${({ movie, theme }) =>
        !movie &&
        `justify-content: center; align-items: center; border: ${theme.utils.pxToRem(1)} solid ${theme.ref.colors['secondary-borders-6']};`}

    display: flex;
    position: relative;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 17.12%, rgba(0, 0, 0, 0.7) 100%),
        url('${process.env.REACT_APP_TMDB_IMAGE_URL}/original/${({ movie }) => movie?.backdrop_path}');

    background-origin: border-box;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;

    overflow: hidden;
`;

const CardTrailerContent = styled.div`
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    flex-direction: column;
    display: flex;

    min-height: ${({ theme }) => theme.utils.pxToRem(200)};

    gap: ${({ theme }) => theme.ref.spacing['12']};

    padding: ${({ theme }) => theme.ref.padding['12']};

    ${({ theme }) => theme.utils.screen('md', `padding: ${theme.ref.padding['48']};`)}

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `
                transition: transform 0.3s ease-out;

                position: relative;

                &::before {
                    content: '';
                    position: absolute;
                    bottom: -70%;
                    left: 0;
                    width: 100%;
                    height: 70%;
                    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 17.12%, rgba(0, 0, 0, 0.7) 100%);
                    transition: bottom 0.3s ease-in-out;
                    pointer-events: none;
                    z-index: 1;
                }

                &:hover {
                    transform: translateY(-20px);
                    transition: transform 0.3s ease-in;

                    &::before {
                        bottom: -20%;
                    }
                }        
        `
        )}

        &:hover {
        button {
            display: flex;
        }
    }
`;

const ButtonOverride = styled(Button)`
    ${({ theme }) =>
        theme.utils.screen(
            'sm',
            `max-width: 100%; height: ${theme.utils.pxToRem(48)}; font-size: ${theme.ref.fontSize['20']}; justify-content:center;`
        )}
`;

const Iframe = styled.iframe`
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
`;

const ButtonClose = styled(Button)`
    position: fixed;
    bottom: ${({ theme }) => theme.ref.spacing['48']};
    right: ${({ theme }) => theme.ref.spacing['48']};
    z-index: 99;
`;
