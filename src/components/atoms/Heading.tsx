import styled from 'styled-components';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    config: HeadingConfig;
}

export default function Heading({ children, config, ...props }: HeadingProps) {
    return (
        <Heading1 config={config} {...props}>
            {children}
        </Heading1>
    );
}

interface HeadingConfig {
    fontWeight: '700' | '600' | '500';
    fontSize: '40' | '24' | '20' | '16' | '12';
    color: 'secondary-accessible-text-12' | 'white';
}

interface HeadingStyledProps {
    config: Omit<HeadingConfig, 'variant'>;
}

const Heading1 = styled.h1<HeadingStyledProps>`
    font-size: ${({ config, theme }) => theme.ref.fontSize[config.fontSize]};
    font-weight: ${({ config, theme }) => theme.ref.fontWeight[config.fontWeight]};
    color: ${({ config, theme }) => theme.ref.colors[config.color]};
`;
