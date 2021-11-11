import {
    WidgetConfigError,
    WidgetDefinition,
    WidgetInstance,
} from '../../../types/base'
import { DashboardWidgetContainerProps } from './DashboardWidgetContainer'
import { isDashboardWidgetDefinition } from '../../../typeguards/dashboard'
import {
    DashboardWidgetConfig,
    DashboardWidgetRegistry,
} from '../../../types/dashboard'

export const convertDashboardWidgetConfigToWidgetList = <
    TWidgetIdentifier extends string
>(
    widgetConfigList: ReadonlyArray<DashboardWidgetConfig<TWidgetIdentifier>>,
    widgetRegistry: DashboardWidgetRegistry<TWidgetIdentifier>
): ReadonlyArray<
    WidgetInstance<DashboardWidgetContainerProps> | WidgetConfigError
> =>
    widgetConfigList.map(
        (widgetConfig: DashboardWidgetConfig<TWidgetIdentifier>) => {
            const {
                instanceId,
                widgetId,
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
            if (!isDashboardWidgetDefinition(widgetDefinition)) {
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

            const width =
                sizeCalculator != null
                    ? sizeCalculator(
                          configSize?.width ?? defaultSize.width,
                          options
                      ).width
                    : configSize?.width ?? defaultSize.width

            const result: WidgetInstance<DashboardWidgetContainerProps> = {
                instanceId,
                component: widgetDefinition.component,
                selector: widgetDefinition.selector,
                containerProps: { className: 'dashboard-widget', width },
                options,
            }

            return result
        }
    )
