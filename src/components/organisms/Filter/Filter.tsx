import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';

import FilterList, { FilterListRef } from './components/FilterList';
import FilterSettings, { FilterSettingsRef } from './components/FilterSettings';

import { MovieSchema } from '../../../schemas/MovieSchema';

export interface FilterRef {
    setToggleSettings: () => void;
    setOpenSettings: (state: boolean) => void;
    setOpenList: (state: boolean) => void;
    setLoading: (state: boolean) => void;
    setList: (movieList: MovieSchema[]) => void;
}

interface FilterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Filter: React.ForwardRefRenderFunction<FilterRef, FilterProps> = (props, ref) => {
    const filterSettingsRef = useRef<FilterSettingsRef>(null);
    const filterListRef = useRef<FilterListRef>(null);

    useImperativeHandle(
        ref,
        () => ({
            setToggleSettings: () => filterSettingsRef.current?.setToggleSettings(),
            setOpenSettings: (state) => filterSettingsRef.current?.setIsOpen(state),
            setOpenList: (state) => filterListRef.current?.setOpenList(state),
            setLoading: (state) => filterListRef.current?.setLoading(state),
            setList: (movieList) => filterListRef.current?.setList(movieList),
        }),
        []
    );

    return (
        <FilterStyled {...props}>
            <FilterList ref={filterListRef} />
            <FilterSettings ref={filterSettingsRef} />
        </FilterStyled>
    );
};

export default forwardRef(Filter);

const FilterStyled = styled.div`
    width: 100%;

    ${({ theme }) => theme.utils.screen('md', 'width: auto;')}

    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};
    position: absolute;
    top: ${({ theme }) => theme.utils.pxToRem(56)};
    z-index: 99;
`;
