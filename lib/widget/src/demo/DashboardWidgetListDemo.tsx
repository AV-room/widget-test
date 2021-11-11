import { FC } from 'react';

import { mockDomainData, linkedPatients1, linkedPatients2 } from './mockData';
import { IDSet, WidgetConfig } from '../types/base';
import dashboardConfig from './mockWidgetConfigurations/dashboardConfig.json';
import { DashboardWidgetListController } from '../controllers/listControllers/dashboard/DashboardWidgetListController';
import { isDashboardWidgetConfig } from '../typeguards/dashboard';
import { isNotNull } from '../utilities';
import {
    DashboardWidgets,
    InpatientDashboardWidgetNames,
} from '../widgets-registry/dashboard';
import { DashboardWidgetConfig } from '../types/dashboard';

export const DashboardWidgetListDemo: FC = () => {
    // validate raw config from Configurator as WidgetConfig in saga before loading into store
    const widgetConfigList = dashboardConfig
        .map((rawConfig: unknown) =>
            isDashboardWidgetConfig<InpatientDashboardWidgetNames>(rawConfig)
                ? rawConfig
                : null
        )
        .filter(isNotNull);

    if (widgetConfigList.length < dashboardConfig.length) {
        return (
            <div>
                <p>
                    One or more config items failed to validate as WidgetConfig
                    type.
                </p>
                ;
                {dashboardConfig.map((rawConfig: WidgetConfig<string>) => {
                    const validated = widgetConfigList.find(
                        (validatedConfig: DashboardWidgetConfig<string>) =>
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
            // locations: mockLocations[0],
        },
        {
            encounterId: '055f2e51-89e5-5acf-98c5-fc3cc1c00070',
            linkedPatients: linkedPatients2,
            // locations: mockLocations[1],
        },
    ];

    return (
        <DashboardWidgetListController
            widgetConfigList={widgetConfigList}
            widgetRegistry={DashboardWidgets}
            idSets={idSets}
            domainData={mockDomainData}
        />
    );
};
