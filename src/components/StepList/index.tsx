import React, { useContext } from 'react';
import * as S from './styles';
import { RiAddFill } from 'react-icons/ri';
import Step from '../Step';
import StepContext from '../../contexts/StepsContext';

const StepList = () => {
    const { steps } = useContext(StepContext);

    const handleEdit = () => alert("Editing...");
    const handleDelete = () => alert("Deleting...");
    const openNewStepModal = () => alert("New Step Modal...");

    return (
        <S.Container>
            <S.StepList>
                {steps.map(item => (
                    <Step
                        key={item.id}
                        title={item.title}
                        onBoard={false}
                    />
                ))}
            </S.StepList>
            <S.Footer>
                <S.BtnNewStep onClick={openNewStepModal}>
                    <RiAddFill /> Adicionar um step
                </S.BtnNewStep>
            </S.Footer>
        </S.Container>
    );
}

export default StepList;