import React, { useContext } from 'react';
import Step from '..';
import StepContext from '../../../contexts/StepsContext';
import * as S from './styles';

export type LigatureType = {
    customClass: string;
    addNode: any;
}

const Ligature = ({ customClass, addNode }: LigatureType) => {
    const { steps } = useContext(StepContext);

    return (
        <S.Container className={customClass}>
            <S.NodesList className="node-list">
                <S.NodeItem onClick={() => addNode({
                    id: 'node-final',
                    render: () => <Step title="Final" type="final" onBoard={true} addNode={addNode} />,
                    coordinates: [250, 0],
                })} className="final-step">Finalizar</S.NodeItem>
                {steps.map(item => (
                    <S.NodeItem onClick={() => addNode({
                        id: item.id,
                        render: () => <Step title={item.title} onBoard={true} addNode={addNode} />,
                        coordinates: [250, 0],
                    })} key={item.id}>{item.title}</S.NodeItem>
                ))}
            </S.NodesList>
        </S.Container>
    );
}

export default Ligature;