import styled, { css } from 'styled-components';
import Diagram from 'beautiful-react-diagrams';

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.shape};
        width: 1024px;
        height: 60vh;
        padding: 24px;
        border-radius: 16px;
        margin-top: 20px;
    `}
`;

export const Wrap = styled(Diagram)`
    ${({ theme }) => css`
        width: 100%;
        height: 100%;
        border: 1px solid ${theme.colors.border};
        border-radius: 16px;
        padding: 24px;
    `}
`;
