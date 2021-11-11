import {
    Size,
    WidgetConfigError,
    WidgetDefinition,
    WidgetInstance,
} from '../../../types/base'
import { PrintWidgetContainerProps } from './PrintWidgetContainer'
import { isPrintWidgetDefinition } from '../../../typeguards/print'
import { PrintWidgetConfig, PrintWidgetRegistry } from '../../../types/print'

export const convertPrintWidgetConfigToWidgetList = <
    TWidgetIdentifier extends string
>(
    widgetConfigList: ReadonlyArray<PrintWidgetConfig<TWidgetIdentifier>>,
    widgetRegistry: PrintWidgetRegistry<TWidgetIdentifier>
): ReadonlyArray<
    WidgetInstance<PrintWidgetContainerProps> | WidgetConfigError
> =>
    widgetConfigList.map(
        (widgetConfig: PrintWidgetConfig<TWidgetIdentifier>) => {
            const {
                instanceId,
                widgetId,
                title,
                options,
                size: configSize,
            } = widgetConfig

            const widgetDefinition: WidgetDefinition<TWidgetIdentifier> =
                widgetRegistry[widgetId]

            // check matching widget definition exists
            if (widgetDefinition == null) {
                return {
                    instanceId,
                    error: 'No widget definition found for this widget config:',
                    erroredConfig: JSON.stringify(widgetConfig, null, 4),
                }
            }

            // check widget definition is correct type
            if (!isPrintWidgetDefinition(widgetDefinition)) {
                return {
                    instanceId,
                    error: 'Configured Widget is not a supported type:',
                    erroredConfig: JSON.stringify(widgetConfig, null, 4),
                }
            }

            // validate configured options
            if (!widgetDefinition.optionsValidator(options)) {
                return {
                    instanceId,
                    error: 'Options on this widget config failed to validate:',
                    erroredConfig: JSON.stringify(widgetConfig, null, 4),
                }
            }

            const { sizeCalculator, defaultSize } = widgetDefinition

            const width: Size = sizeCalculator(
                configSize ?? defaultSize,
                options
            )

            const result: WidgetInstance<PrintWidgetContainerProps> = {
                instanceId,
                title,
                component: widgetDefinition.component,
                selector: widgetDefinition.selector,
                containerProps: { className: 'print-widget', width },
                options,
            }

            return result
        }
    )
