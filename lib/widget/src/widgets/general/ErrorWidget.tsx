import { FC } from 'react';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    border: 1px solid darkred;
    color: darkred;
    font-size: 12px;
    padding: 10px 20px;

    pre {
        white-space: pre-wrap;
    }
`;

interface ErrorWidgetProps {
    error: string;
    erroredConfig: string;
}

export const ErrorWidget: FC<ErrorWidgetProps> = ({ error, erroredConfig }: ErrorWidgetProps) => {
    return error != null ? (
        <Container>
            <p>{error}</p>
            <pre>{erroredConfig}</pre>
        </Container>
    ) : null;
};
