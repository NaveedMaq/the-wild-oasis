import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-style: 600;
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      font-style: 600;
    `}
  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      font-style: 500;
    `}

  line-height: 1.4;
`;

export default Heading;
