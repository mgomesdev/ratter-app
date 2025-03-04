import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

import Paragraph from '../../../atoms/Paragraph';
import Heading from '../../../atoms/Heading';
import Image from '../../../atoms/Image';
import Badge from '../../../atoms/Badge';

import { MovieSchema } from '../../../../schemas/MovieSchema';

import { formatVoteAverage, formatYear } from '../../../../core/utils/format';

export interface FilterListRef {
    setOpenList: React.Dispatch<React.SetStateAction<boolean>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FilterListProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    movieList: MovieSchema[];
}

const FilterList = forwardRef<FilterListRef, FilterListProps>(({ movieList, ...props }, ref) => {
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [list, setList] = useState<MovieSchema[]>(movieList);

    const navigate = useNavigate();

    useImperativeHandle(
        ref,
        () => ({
            setOpenList: setIsOpen,
            setLoading,
        }),
        []
    );

    useEffect(() => {
        setList(movieList);
    }, [movieList]);

    return (
        <>
            {isOpen && (
                <FilterListStyled {...props}>
                    <Heading config={{ fontSize: '12', fontWeight: '500', color: 'secondary-accessible-text-12' }}>
                        {list.length > 0 && 'Resultados'}
                    </Heading>

                    <CardMovieContainer>
                        {loading ? (
                            <CardMovieLoader>Carregando...</CardMovieLoader>
                        ) : (
                            list.length > 0 &&
                            list.map((movie, key) => (
                                <CardMovieList
                                    data-testid={`movie-item-${key}`}
                                    onClick={() => navigate(`/movie/${movie.id}`)}
                                    key={movie.id}
                                >
                                    <CardMovie>
                                        <Image
                                            data-testid="atom-image"
                                            src={`${process.env.REACT_APP_TMDB_IMAGE_URL}/w300/${movie.poster_path}`}
                                        />
                                    </CardMovie>

                                    <CardMovieSpec>
                                        <CardMovieSpecHeader>
                                            <Heading
                                                config={{
                                                    fontSize: '12',
                                                    fontWeight: '500',
                                                    color: 'secondary-accessible-text-12',
                                                }}
                                            >
                                                {movie.title}
                                            </Heading>

                                            <CardMovieBadgeOverride
                                                data-testid="card-movie-badge"
                                                config={{
                                                    iconSize: 14,
                                                    iconColor: 'yellow',
                                                    label: formatVoteAverage(`${movie.vote_average}`),
                                                    icon: 'star',
                                                }}
                                            />
                                        </CardMovieSpecHeader>

                                        <Paragraph
                                            config={{
                                                fontWeight: 500,
                                                color: 'secondary-accessible-text-11',
                                                size: 13,
                                            }}
                                        >
                                            {formatYear(movie.release_date)}
                                        </Paragraph>
                                    </CardMovieSpec>
                                </CardMovieList>
                            ))
                        )}
                    </CardMovieContainer>
                </FilterListStyled>
            )}
        </>
    );
});

export default FilterList;

const FilterListStyled = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(251)};
    width: 100%;
    max-width: ${({ theme }) => theme.utils.pxToRem(377)};

    ${({ theme }) => theme.utils.screen('md', `min-width: ${theme.utils.pxToRem(377)};`)}

    background-color: ${({ theme }) => theme.ref.colors['secondary-background-2']};
    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};
    padding: ${({ theme }) => theme.ref.padding['12']};
    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};
`;

const CardMovieContainer = styled.div`
    max-height: ${({ theme }) => theme.utils.pxToRem(251)};
    overflow-y: auto;
`;

const CardMovieLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${({ theme }) => theme.utils.pxToRem(251 / 1.5)};
    z-index: 1;
`;

const CardMovieList = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['8']};

    border-radius: ${({ theme }) => theme.ref.borderRadius['16']};
    padding: ${({ theme }) => theme.ref.padding['4']};

    transition: background 0.3s ease-out;
    z-index: 2;

    &:hover {
        transition: background 0.3s ease-in;
        background-color: ${({ theme }) => theme.ref.colors['secondary-interactive-3']};
    }

    cursor: pointer;
`;

const CardMovie = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(86)};
    min-width: ${({ theme }) => theme.utils.pxToRem(64)};
    max-width: ${({ theme }) => theme.utils.pxToRem(64)};
    border: ${({ theme }) => theme.utils.pxToRem(2)} solid ${({ theme }) => theme.ref.colors['secondary-borders-6']};
    border-radius: ${({ theme }) => theme.ref.borderRadius['12']};
    overflow: hidden;
`;

const CardMovieSpec = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['8']};
`;

const CardMovieSpecHeader = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
`;

const CardMovieBadgeOverride = styled(Badge)`
    background: none;
    height: auto;
    box-shadow: none;

    & > {
        svg {
            width: ${({ theme }) => theme.utils.pxToRem(14)};
            height: ${({ theme }) => theme.utils.pxToRem(14)};
        }
    }

    & > label {
        font-size: ${({ theme }) => theme.ref.fontSize['12']};
    }
`;
