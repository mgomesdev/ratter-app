import styled from 'styled-components';

import BarDivider from '../atoms/BarDivider';
import Strong from '../atoms/Strong';
import Icon from '../atoms/Icon';
import React from 'react';

interface SpecRatingViewProps extends React.HTMLAttributes<HTMLDivElement> {
    config: {
        ratingLabel: string;
        viewLabel: string;
    };
}

export default function SpecRatingView({ config, ...props }: SpecRatingViewProps) {
    const { ratingLabel, viewLabel } = config;
    return (
        <SpecRatingViewStyled {...props}>
            <SpecRating data-testid="spec-rating">
                <Icon data-testid="spec-rating-star" config={{ color: 'yellow', icon: 'star', size: 20 }} />
                <Strong
                    data-testid="spec-rating-number"
                    config={{ fontWeight: 600, label: ratingLabel, color: 'white', size: 20 }}
                />
            </SpecRating>

            <BarDivider
                data-testid="spec-bar-divider"
                config={{
                    height: 18,
                    width: 2,
                }}
            />

            <Strong
                data-testid="spec-view"
                config={{
                    fontWeight: 600,
                    label: viewLabel,
                    color: 'secondary-accessible-text-11',
                    size: 14,
                }}
            />
        </SpecRatingViewStyled>
    );
}

const SpecRatingViewStyled = styled.div`
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['4']};
`;

const SpecRating = styled.div`
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['8']};
`;
