import React from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...props }: InputProps) {
    return <InputStyled {...props} />;
}

const InputStyled = styled.input`
    height: ${({ theme }) => theme.utils.pxToRem(48)};
    max-width: ${({ theme }) => theme.utils.pxToRem(283)};
    width: 100%;
    background-color: ${({ theme }) => theme.ref.colors['secondary-background-2']};
    border-radius: ${({ theme }) => theme.ref.borderRadius['99']};
    padding-left: calc(${({ theme }) => theme.ref.padding['12']} + ${({ theme }) => theme.utils.pxToRem(40)});
    padding-right: ${({ theme }) => theme.ref.padding['12']};
    outline: none;
    border: none;
    color: ${({ theme }) => theme.ref.colors.white};

    &::placeholder {
        color: ${({ theme }) => theme.ref.colors['secondary-interactive-5']};
    }

    ${({ theme }) => theme.utils.applyHoverTransition()}
`;
