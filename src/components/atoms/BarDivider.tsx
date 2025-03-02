import React from 'react';
import styled from 'styled-components';

interface BarDividerConfig {
    config: {
        height: 18 | 20 | 29;
        width: 2 | 4;
    };
}

interface BarDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function BarDivider({ config, ...props }: BarDividerProps & BarDividerConfig) {
    const { height, width } = config;

    return (
        <BarDividerStyled
            config={{
                height,
                width,
            }}
            {...props}
        />
    );
}

interface BarDividerStyledProps extends BarDividerConfig {}

const BarDividerStyled = styled.div<BarDividerStyledProps>`
    width: ${({ theme, config }) => theme.utils.pxToRem(config.width)};
    height: ${({ theme, config }) => theme.utils.pxToRem(config.height)};
    background-color: ${({ theme }) => theme.ref.colors['secondary-accessible-text-11']};
`;
