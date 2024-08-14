import { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FilterButton, { FilterButtonRef } from '../atoms/FilterButton';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Icon from '../atoms/Icon';

import Filter, { FilterRef } from './Filter/Filter';

import { useFilteredMovieStore } from '../../app/store';

import MovieService from '../../services/MovieService';
import { MovieSchema } from '../../schemas/MovieSchema';

export default function Header() {
    const { filteredMovies, setFilteredMovies } = useFilteredMovieStore();

    const filterButtonRef = useRef<FilterButtonRef>(null);
    const filterRef = useRef<FilterRef>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const fetchAndUpdateFilterStore = useCallback(
        async (query: string) => {
            try {
                const data = await MovieService.filterByQuery(query);

                if (filteredMovies) {
                    setFilteredMovies([...filteredMovies, ...data.results]);
                } else {
                    setFilteredMovies(data.results);
                }

                return data.results;
            } catch {}
        },
        [setFilteredMovies, filteredMovies]
    );

    const getFilterData = useCallback(
        async (query: string): Promise<MovieSchema[] | undefined> => filteredMovies ?? fetchAndUpdateFilterStore(query),
        [fetchAndUpdateFilterStore, filteredMovies]
    );

    const filterMovies = useCallback((query: string, movies: MovieSchema[]) => {
        const normalizedQuery = query.toLowerCase().trim();

        return movies.filter((movie) => {
            const result = movie.title ? movie.title.toLowerCase() : '';

            return result.includes(normalizedQuery);
        });
    }, []);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
        async (e) => {
            e.preventDefault();

            const data = new FormData(e.currentTarget);
            const query = data.get('query');

            if (query) {
                // filterRef.current?.setOpenList(true);
                // filterButtonRef.current?.setCount(7);
                try {
                    const encodeQuery = encodeURIComponent(`${query}`);

                    const data = await getFilterData(encodeQuery);

                    const filterQueryOnStore = filterMovies(encodeQuery, data!);

                    if (filterQueryOnStore.length > 0) {
                        // TODO: aqui, já possui o registro na estore, setar a lista novamente sem buscar.
                    } else {
                        const filterAndUpdateStore = await fetchAndUpdateFilterStore(encodeQuery);
                        const filterAgain = filterMovies(encodeQuery, filterAndUpdateStore!);

                        if (filterAgain.length > 0) {
                            // TODO: aqui buscou novamente da api, setar a lista novamente aqui.
                        }
                    }
                } catch {}
            }
        },
        [fetchAndUpdateFilterStore, getFilterData]
    );

    /*
     *
     * TODO: desabilitei a abertura das opções de filtro, porque tive que priorizar outras partes do sistema porque não ia dar tempo.
     * Mas como podem ver, está tudo bem encaminhado, só faltou adicionar os elementos e atualizar o submit do form.
     * Para ver funcionando, descomente as linhas relacionadas ao 'Settings' e remova o 'return null' porque é um método 'void'.
     *
     * TODO: após finalizar os components do Settings, remover os comentários.
     *
     */
    const handleOpenSettings = useCallback(() => {
        /*
        const data = new FormData(formRef.current!);

        if (data.get('nome')) {
            filterRef.current?.setToggleSettings();
        } */

        return null;
    }, []);

    const handleClear = useCallback(() => {
        const data = new FormData(formRef.current!);

        if (!data.get('nome')) {
            filterButtonRef.current?.setCount(0);
            filterRef.current?.setOpenList(false);
        }
    }, []);

    return (
        <HeaderStyled data-testid="header">
            <HeaderStyledContainer>
                <button onClick={() => fetchAndUpdateFilterStore('homem de ferro')}>FetchStore</button>

                <Link to={{ pathname: '/' }}>
                    <Logo data-testid="header-logo" src="/logo.svg" alt="Rater App - Logo" />
                </Link>

                <FormContainer>
                    <Form data-testid="header-form-search" onSubmit={handleSubmit} ref={formRef}>
                        <Button
                            config={{ variant: 'rounded-icon-button' }}
                            data-testid="header-form-search-btn-search"
                            type="submit"
                            style={{
                                position: 'absolute',
                                left: '0.25rem',
                                zIndex: 1,
                            }}
                        >
                            <Icon config={{ color: 'white', icon: 'search', size: 24 }} />
                        </Button>

                        <Input
                            data-testid="header-form-search-input"
                            placeholder="Pesquisar..."
                            type="text"
                            name="query"
                            onKeyUp={handleClear}
                        />

                        <FilterButton
                            data-testid="header-form-search-btn-filter"
                            onClick={handleOpenSettings}
                            type="button"
                            ref={filterButtonRef}
                        />
                    </Form>

                    <Filter data-testid="header-form-filter" ref={filterRef} />
                </FormContainer>
            </HeaderStyledContainer>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    background-color: ${({ theme }) => theme.ref.colors['secondary-background-1']};
    width: 100%;
    padding-top: ${({ theme }) => theme.ref.padding['24']};
    padding-bottom: ${({ theme }) => theme.ref.padding['16']};

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `
       max-height: ${theme.utils.pxToRem(96)};
       padding: 0;
        `
        )}
`;

const HeaderStyledContainer = styled.div`
    ${({ theme }) => theme.utils.container()}

    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['24']};

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `
        justify-content: space-between;
        flex-direction: row;
        `
        )}
`;

const Logo = styled.img`
    height: 23px;
    width: 86px;

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `
        height: 35px;
        width: 128px;
        `
        )}
`;

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;

    ${({ theme }) => theme.utils.screen('md', `padding-right: ${theme.utils.pxToRem(343 / 2)}`)};

    position: relative;
`;

const Form = styled.form`
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing[12]};
    position: relative;
`;
