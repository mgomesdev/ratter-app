import React from 'react';
import styled from 'styled-components';

interface BadgeCategoryProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function BadgeCategory({ children, ...props }: BadgeCategoryProps) {
    return <BadgeCategoryStyled {...props}>{children}</BadgeCategoryStyled>;
}

const BadgeCategoryStyled = styled.div`
    max-width: max-content;
    height: ${({ theme }) => theme.utils.pxToRem(24)};
    border-radius: ${({ theme }) => theme.ref.borderRadius['99']};
    border: ${({ theme }) => theme.utils.pxToRem(2)} solid ${({ theme }) => theme.ref.colors['secondary-interactive-5']};
    color: ${({ theme }) => theme.ref.colors['secondary-accessible-text-11']};
    font-size: ${({ theme }) => theme.ref.fontSize['12']};
    font-weight: ${({ theme }) => theme.ref.fontWeight['400']};
    background-color: ${({ theme }) => theme.ref.colors['secondary-background-1']};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.ref.spacing['4']} ${({ theme }) => theme.ref.spacing['12']};
`;
