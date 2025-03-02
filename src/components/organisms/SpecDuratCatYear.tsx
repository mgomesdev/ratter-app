import styled from 'styled-components';

import BulletDivider from '../atoms/BulletDivider';
import Strong from '../atoms/Strong';

interface SpecDuratCatYearProps extends React.HTMLAttributes<HTMLDivElement> {
    config: {
        duratLabel: string;
        yearLabel: string;
        catLabel?: string;
    };
}

export default function SpecDuratCatYear({ config, ...props }: SpecDuratCatYearProps) {
    const { duratLabel, yearLabel, catLabel } = config;

    return (
        <SpecDuratCatYearStyled {...props}>
            <Strong
                data-testid="spec-durat"
                config={{
                    fontWeight: 600,
                    label: duratLabel,
                    color: 'secondary-accessible-text-11',
                    size: 14,
                }}
            />

            <BulletDivider data-testid="spec-bar-divider" />

            {catLabel && (
                <>
                    <Strong
                        data-testid="spec-cat"
                        config={{
                            fontWeight: 600,
                            label: catLabel,
                            color: 'secondary-accessible-text-11',
                            size: 14,
                        }}
                        style={{
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            width: '16.625rem',
                        }}
                    />

                    <BulletDivider />
                </>
            )}

            <Strong
                data-testid="spec-year"
                config={{
                    fontWeight: 600,
                    label: yearLabel,
                    color: 'secondary-accessible-text-11',
                    size: 14,
                }}
            />
        </SpecDuratCatYearStyled>
    );
}

const SpecDuratCatYearStyled = styled.div`
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};
`;
