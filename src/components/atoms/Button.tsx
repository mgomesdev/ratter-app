import styled from 'styled-components';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    config: {
        variant: 'rounded-icon-button' | 'transparent-button' | 'secondary-button';
    };
    type?: 'button' | 'submit' | 'reset' | undefined;
}

export default function Button({ children, config, ...props }: ButtonProps) {
    const { variant } = config;

    return (
        <>
            {variant === 'rounded-icon-button' && <RoundedIconButton {...props}>{children}</RoundedIconButton>}
            {variant === 'transparent-button' && <TransparentButton {...props}>{children}</TransparentButton>}
            {variant === 'secondary-button' && <SecondaryButton {...props}>{children}</SecondaryButton>}
        </>
    );
}

const RoundedIconButton = styled.button`
    background-color: ${({ theme }) => theme.ref.colors['secondary-interactive-3']};
    border-radius: ${({ theme }) => theme.ref.borderRadius['99']};
    cursor: pointer;
    max-height: ${({ theme }) => theme.utils.pxToRem(40)};
    min-height: ${({ theme }) => theme.utils.pxToRem(40)};
    min-width: ${({ theme }) => theme.utils.pxToRem(40)};
    max-width: ${({ theme }) => theme.utils.pxToRem(40)};
    justify-content: center;
    align-items: center;
    display: flex;

    ${({ theme }) => theme.utils.applyHoverTransition()}
`;

const TransparentButton = styled.button`
    border-radius: ${({ theme }) => theme.ref.borderRadius['12']};
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
    padding: ${({ theme }) => theme.ref.spacing['12']};
    max-width: ${({ theme }) => theme.utils.pxToRem(139)};
    height: ${({ theme }) => theme.utils.pxToRem(27)};
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['8']};
    font-weight: ${({ theme }) => theme.ref.fontWeight['600']};
    font-size: ${({ theme }) => theme.ref.fontSize['12']};
    cursor: pointer;

    ${({ theme }) => theme.utils.applyTransparentBg()}
    ${({ theme }) => theme.utils.applyHoverTransition()}

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `  
                max-width: ${theme.utils.pxToRem(216)};
                height: ${theme.utils.pxToRem(48)};
                width: 100%;
                font-size: ${theme.ref.fontSize['20']};

            `
        )}

        & > span {
        white-space: nowrap;
    }
`;

const SecondaryButton = styled.button`
    background-color: ${({ theme }) => theme.ref.colors['secondary-interactive-3']};
    border-radius: ${({ theme }) => theme.ref.borderRadius['12']};
    font-weight: ${({ theme }) => theme.ref.fontWeight['600']};
    font-size: ${({ theme }) => theme.ref.fontSize['16']};
    padding: ${({ theme }) => theme.ref.spacing['12']} ${({ theme }) => theme.ref.spacing['24']};
    cursor: pointer;
    color: ${({ theme }) => theme.ref.colors['secondary-accessible-text-12']};

    ${({ theme }) => theme.utils.applyHoverTransition()}
`;
