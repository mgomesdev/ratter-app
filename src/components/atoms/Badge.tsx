import React from 'react';
import styled from 'styled-components';
import Icon, { IconSize, IconType } from './Icon';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    config: {
        iconColor: 'yellow' | 'white';
        icon: IconType;
        iconSize?: IconSize;
        label?: string;
    };
}

export default function Badge({ config, ...props }: BadgeProps) {
    const { iconColor, label, iconSize, icon } = config;

    return (
        <BadgeStyled label={label} {...props}>
            <IconOverride strokeWidth={2} config={{ color: iconColor, icon, size: iconSize ?? 20 }} />
            {label && <BadgeLabel>{label}</BadgeLabel>}
        </BadgeStyled>
    );
}

interface BadgeStyledProps {
    label?: string;
}

const BadgeStyled = styled.div<BadgeStyledProps>`
    width: max-content;
    height: 22px;

    ${({ theme }) => theme.utils.screen('md', ` height: ${theme.utils.pxToRem(36)};`)}

    ${({ theme }) => theme.utils.applyTransparentBg()}

    border-radius: ${({ theme }) => theme.ref.borderRadius['8']};
    padding: 0 ${({ theme }) => theme.ref.padding['8']};
    justify-content: center;
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['4']};
`;

const BadgeLabel = styled.label`
    font-weight: ${({ theme }) => theme.ref.fontWeight['600']};
    font-size: ${({ theme }) => theme.ref.fontSize['14']};

    ${({ theme }) => theme.utils.screen('md', ` font-size: ${theme.ref.fontSize['20']};`)}
`;

const IconOverride = styled(Icon)`
    width: ${({ theme }) => theme.utils.pxToRem(14)};
    height: ${({ theme }) => theme.utils.pxToRem(14)};

    ${({ theme }) => theme.utils.screen('md', `width: ${theme.utils.pxToRem(20)}; height: ${theme.utils.pxToRem(20)};`)}
`;
