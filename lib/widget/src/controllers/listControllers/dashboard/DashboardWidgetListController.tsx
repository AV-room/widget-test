import { ReactElement, useMemo } from 'react'

import styled from 'styled-components'

import { getGroupKey } from '../../../utilities'
import {
    DomainData,
    IDSet,
    WidgetInstance,
    WidgetConfigError,
} from '../../../types/base'
import { WidgetGroupController } from '../../baseControllers/WidgetGroupController'
import {
    DashboardWidgetContainer,
    DashboardWidgetContainerProps,
} from './DashboardWidgetContainer'
import { convertDashboardWidgetConfigToWidgetList } from './utilities'
import {
    DashboardWidgetConfig,
    DashboardWidgetRegistry,
} from '../../../types/dashboard'

const DashboardWidgetListContainer = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    width: 1000px;

    .widget-group {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        border: 1px dotted magenta;
        height: 50px;
        padding: 0;
        margin: 0;
    }

    .widget > div {
        border: 1px solid turquoise;
        height: 100%;
    }
`

interface ListControllerProps<TWidgetNames extends string> {
    widgetConfigList: ReadonlyArray<DashboardWidgetConfig<TWidgetNames>>
    widgetRegistry: DashboardWidgetRegistry<TWidgetNames>
    idSets: ReadonlyArray<IDSet>
    domainData: DomainData
    className?: string
}

export const DashboardWidgetListController = <TWidgetNames extends string>({
    widgetConfigList,
    widgetRegistry,
    className,
    idSets,
    domainData,
}: ListControllerProps<TWidgetNames>): ReactElement => {
    const widgetList: ReadonlyArray<
        WidgetInstance<DashboardWidgetContainerProps> | WidgetConfigError
    > = useMemo(
        () =>
            convertDashboardWidgetConfigToWidgetList<TWidgetNames>(
                widgetConfigList,
                widgetRegistry
            ),
        [widgetConfigList, widgetRegistry]
    )

    return (
        <DashboardWidgetListContainer
            className={`widget-list ${className ?? ''}`}
        >
            {idSets.map((idSet: IDSet) => (
                <WidgetGroupController
                    key={getGroupKey(idSet)}
                    container={DashboardWidgetContainer}
                    idSet={idSet}
                    widgets={widgetList}
                    domainData={domainData}
                />
            ))}
        </DashboardWidgetListContainer>
    )
}
