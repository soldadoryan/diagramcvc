import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.mutedShape};
        position: absolute;
        z-index: 5;
        cursor: all-scroll;

        &:hover > .node-list {
            display: flex;
        }

        &.right {
            top: calc(50% - 8px);
            right: 0;
            width: 8px;
            height: 16px;
            border-radius: 8px 0 0 8px;

            & > .node-list {
                position: absolute;
                top: 0;
                left: 100%;
            }
        }

        &.left {
            top: calc(50% - 8px);
            left: 0;
            width: 8px;
            height: 16px;
            border-radius: 0 8px 8px 0;

            & > .node-list {
                position: absolute;
                top: 20px;
                left: 0px;
            }
        }
    `}
`;

export const NodesList = styled.ul`
    ${({ theme }) => css`
        background-color: ${theme.colors.dropdownShape};
        width: 150px;
        max-height: 200px;
        display: none;
        flex-direction: column;
        list-style: none;
        box-shadow: 0px 1px 4px rgba(0, 0, 20, 0.12);
        padding: 10px;
        margin: 0;
        border-radius: 5px;
        cursor: pointer;
    `}
`;

export const NodeItem = styled.li`
    ${({ theme }) => css`
        width: 100%;
        padding: 0 10px;
        height: 50px;
        border-bottom: 1px solid ${theme.colors.border};
        color: ${theme.colors.primary};
        display: flex;
        align-items: center;

        &:last-child {
            border: 0;
        }

        &.final-step {
            background-color: ${theme.colors.nodes.final};
            color: ${theme.colors.nodes.textFinal};
            text-align: center;
            justify-content: center;
            border-radius: 20px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    `}
`;
