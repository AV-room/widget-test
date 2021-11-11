import { FC } from 'react';

import styled from 'styled-components';

import {
    //  mockLocations,
    mockDomainData,
    linkedPatients1,
    linkedPatients2,
} from './mockData';
import { PrintWidgetListController } from '../controllers/listControllers/print/PrintWidgetListController';
import { IDSet, WidgetConfig } from '../types/base';
import handoverReportConfig from './mockWidgetConfigurations/printConfig.json';
import {
    HandoverReportWidgetNames,
    ReportWidgets,
} from '../widgets-registry/print';
import { isPrintWidgetConfig } from '../typeguards/print';
import { isNotNull } from '../utilities';
import { PrintWidgetConfig } from '../types/print';

const DemoContainer = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    width: 800px;
    border: 1px solid black;
    padding: 10px;
    font-size: 12px;
`;

export const PrintWidgetListDemo: FC = () => {
    // validate raw config from Configurator as WidgetConfig in saga before loading into store
    const widgetConfigList = handoverReportConfig
        .map((rawConfig: unknown) =>
            isPrintWidgetConfig<HandoverReportWidgetNames>(rawConfig)
                ? rawConfig
                : null
        )
        .filter(isNotNull);

    if (widgetConfigList.length < handoverReportConfig.length) {
        return (
            <div>
                <p>
                    One or more config items failed to validate as WidgetConfig
                    type.
                </p>
                ;
                {handoverReportConfig.map((rawConfig: WidgetConfig<string>) => {
                    const validated = widgetConfigList.find(
                        (validatedConfig: PrintWidgetConfig<string>) =>
                            rawConfig.instanceId === validatedConfig.instanceId
                    );

                    return (
                        <pre
                            style={{
                                color: validated != null ? 'black' : 'red',
                            }}
                        >
                            {JSON.stringify(rawConfig, null, 4)}
                        </pre>
                    );
                })}
            </div>
        );
    }

    const idSets: ReadonlyArray<IDSet> = [
        {
            encounterId: '780f1943-8b05-5bfb-87fa-7655e279afb4',
            linkedPatients: linkedPatients1,
        },
        {
            encounterId: '055f2e51-89e5-5acf-98c5-fc3cc1c00070',
            linkedPatients: linkedPatients2,
        },
    ];

    return (
        <DemoContainer>
            <PrintWidgetListController
                widgetConfigList={widgetConfigList}
                widgetRegistry={ReportWidgets}
                idSets={idSets}
                domainData={mockDomainData}
            />
        </DemoContainer>
    );
};
