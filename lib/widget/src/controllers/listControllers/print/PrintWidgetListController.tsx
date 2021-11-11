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
    PrintWidgetContainer,
    PrintWidgetContainerProps,
} from './PrintWidgetContainer'
import { convertPrintWidgetConfigToWidgetList } from './utilities'
import { PrintWidgetConfig, PrintWidgetRegistry } from '../../../types/print'

const PrintWidgetListContainer = styled.div`
    * {
        box-sizing: border-box;
    }

    .widget-group {
        display: flex;
        flex-flow: row wrap;
        padding: 0;
        margin: 0 0 5px;
        border-top: 1px solid #9a9a9a;
    }

    .widget > div {
        height: 100%;
    }
`

interface ListControllerProps<TWidgetNames extends string> {
    widgetConfigList: ReadonlyArray<PrintWidgetConfig<TWidgetNames>>
    widgetRegistry: PrintWidgetRegistry<TWidgetNames>
    idSets: ReadonlyArray<IDSet>
    domainData: DomainData
    className?: string
}

export const PrintWidgetListController = <TWidgetNames extends string>({
    widgetConfigList,
    widgetRegistry,
    className,
    idSets,
    domainData,
}: ListControllerProps<TWidgetNames>): ReactElement => {
    const widgetList: ReadonlyArray<
        WidgetInstance<PrintWidgetContainerProps> | WidgetConfigError
    > = useMemo(
        () =>
            convertPrintWidgetConfigToWidgetList<TWidgetNames>(
                widgetConfigList,
                widgetRegistry
            ),
        [widgetConfigList, widgetRegistry]
    )

    return (
        <PrintWidgetListContainer className={`widget-list ${className ?? ''}`}>
            {idSets.map((idSet: IDSet) => (
                <WidgetGroupController
                    key={getGroupKey(idSet)}
                    container={PrintWidgetContainer}
                    idSet={idSet}
                    widgets={widgetList}
                    domainData={domainData}
                />
            ))}
        </PrintWidgetListContainer>
    )
}
