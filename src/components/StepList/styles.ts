import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.mutedShape};
        display: flex;
        flex-direction: column;
        width: 1024px;
        padding: 16px 24px;
        border-radius: 16px;
        margin-top: 25px;
    `}
`;

export const StepList = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
export const Footer = styled.div`
    margin-top: 24px;
`;
export const BtnNewStep = styled.button`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        background-color: transparent;
        color: ${theme.colors.primary};
        font-weight: bold;
        border:0;
        font-size: 12px;
        cursor: pointer;

        svg {
            margin-right: 7px;
        }
    `}
`;


