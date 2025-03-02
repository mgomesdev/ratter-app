import styled from 'styled-components';

interface BulletDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function BulletDivider({ ...props }: BulletDividerProps) {
    return <BulletDividerStyled {...props} />;
}

const BulletDividerStyled = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(6)};
    width: ${({ theme }) => theme.utils.pxToRem(6)};
    background-color: ${({ theme }) => theme.ref.colors['secondary-accessible-text-11']};
    border-radius: 100%;
`;
