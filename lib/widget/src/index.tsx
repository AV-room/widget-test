import ReactDOM from 'react-dom';
import styled from 'styled-components';

// import { PrintWidgetListDemo } from './demo/PrintWidgetListDemo';
import { DashboardWidgetListDemo } from './demo/DashboardWidgetListDemo';
import React from 'react';

const DemoContainer = styled.body`
    font-size: 12px;
`;

const root = document.createElement('div');

document.body.appendChild(root);

ReactDOM.render(
    <DemoContainer>
        {/*<PrintWidgetListDemo />*/}
        <DashboardWidgetListDemo />
    </DemoContainer>,
    root
);
