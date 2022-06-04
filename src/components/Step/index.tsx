import React from 'react';
import * as S from './styles';
import { RiMailLine, RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';
import Ligature from './Ligature';

export type StepType = {
    title: string;
    onBoard: boolean;
    addNode?: any;
    type?: 'normal' | 'initial' | 'final'
}

const Step = ({ title, onBoard, addNode, type = 'normal' }: StepType) => {
    const handleEdit = () => alert("Editing...");
    const handleDelete = () => alert("Deleting...");

    return (
        <>
            {type === 'normal' ? (
                <S.Container>
                    <S.Header>
                        <RiMailLine />
                        <S.Title>{title}</S.Title>
                    </S.Header>
                    <S.Footer>
                        <S.BtnAction onClick={handleEdit}><RiPencilLine /></S.BtnAction>
                        <S.BtnAction onClick={handleDelete}><RiDeleteBinLine /></S.BtnAction>
                    </S.Footer>
                    {onBoard && (
                        <>
                            <Ligature customClass='right' addNode={addNode} />
                            <Ligature customClass='left' addNode={addNode} />
                        </>
                    )}
                </S.Container>
            ) : (
                <S.SpecialNode type={type}>
                    {title}
                </S.SpecialNode>
            )}
        </>
    );
}

export default Step;