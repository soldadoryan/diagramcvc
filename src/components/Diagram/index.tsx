import React from 'react';
import * as S from './styles';
import { createSchema, useSchema } from 'beautiful-react-diagrams';
import Step from '../Step';

export type CustomNodeType = {
    inputs?: [],
    outputs?: []
}

const Diagram: React.FC = () => {
    const initialSchema = createSchema({
        nodes: [
            {
                id: '1',
                coordinates: [0, 0],
                render: () => <Step title='Teste de step' onBoard={true} addNode={addNode} />,
                inputs: [],
                outputs: [],
            }
        ],
        links: []
    });
    const [schema, { onChange, addNode }] = useSchema(initialSchema);

    return (
        <S.Container>
            <S.Wrap schema={schema} onChange={onChange} />
        </S.Container>
    );
}

export default Diagram;