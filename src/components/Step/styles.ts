import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.shape};
        border-radius: 5px;
        box-shadow: 0px 1px 4px rgba(0, 0, 20, 0.12);
        padding: 24px;
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: all-scroll;
        position: relative;
    `}
`;

export const Header = styled.div`
    ${({ theme }) => css`
        width: 100%;
        display: flex;
        flex-direction: column;
        
        svg {
            color: ${theme.colors.mutedText};
            margin-bottom: 12px;
        }
    `}
`;

export const Title = styled.h2`
    ${({ theme }) => css`
        color: ${theme.colors.text};
        font-size: 16px;
        font-weight: bold;
    `}
`;

export const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;


export const BtnAction = styled.button`
    ${({ theme }) => css`
        background-color: transparent;
        font-size: 20px;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        color: ${theme.colors.primary};
        cursor: pointer;
        margin-left: 10px;
    `}
`;

type SpecialNodeProps = {
    type: 'normal' | 'initial' | 'final';
}

export const SpecialNode = styled.div<SpecialNodeProps>`
    ${({ theme, type }) => css`
        ${type === 'final' && css`
            background-color: ${theme.colors.nodes.final};
            color: ${theme.colors.nodes.textFinal};
            display: flex;
            max-width: 100px;
            justify-content: center;
            align-items: center;
            height: 50px;
            font-weight: bold;
            padding: 0 20px;
            border-radius: 25px;
        `}
    `}
`;