import { ReactElement } from 'react'

import { ErrorWidget } from '../../widgets/general/ErrorWidget'
import {
    DomainData,
    WidgetConfigError,
    IDSet,
    WidgetInstance,
    BaseWidgetContainerProps,
    WidgetContainer,
} from '../../types/base'
import { WidgetComponentController } from './WidgetComponentController'
import { isWidgetConfigError } from '../../typeguards/base'

interface WidgetGroupControllerProps<
    TWidgetContainerProps extends BaseWidgetContainerProps
> {
    container: WidgetContainer<TWidgetContainerProps>
    widgets: ReadonlyArray<
        WidgetInstance<TWidgetContainerProps> | WidgetConfigError
    >
    domainData: DomainData
    idSet: IDSet
    className?: string
}

export const WidgetGroupController = <
    TWidgetContainerProps extends BaseWidgetContainerProps
>({
    container,
    widgets,
    domainData,
    idSet,
    className,
}: WidgetGroupControllerProps<TWidgetContainerProps>): ReactElement => {
    return (
        <div className={`widget-group ${className ?? ''}`}>
            {widgets.map((widget) =>
                isWidgetConfigError(widget) ? (
                    <ErrorWidget
                        key={widget.instanceId}
                        error={widget.error}
                        erroredConfig={widget.erroredConfig}
                    />
                ) : (
                    <WidgetComponentController
                        key={widget.instanceId}
                        container={container}
                        widget={widget}
                        domainData={domainData}
                        idSet={idSet}
                    />
                )
            )}
        </div>
    )
}
