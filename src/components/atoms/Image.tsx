import React from 'react';
import styled from 'styled-components';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export default function Image({ ...props }: ImageProps) {
    return <ImageStyled {...props} />;
}

const ImageStyled = styled.div<ImageProps>`
    width: 100%;
    height: 100%;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 17.12%, rgba(0, 0, 0, 0.7) 100%),
        url('${(props) => props.src}');

    background-origin: border-box;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
`;
