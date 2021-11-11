// dashboard widget
import {
    DomainData,
    SizeConfig,
    SizeInUnits,
    WidgetConfig,
    WidgetDefinition,
    WidgetType,
} from './base'

export interface DashboardSize {
    width: SizeInUnits
}

export interface DashboardWidgetConfig<TIdentifier extends string>
    extends WidgetConfig<TIdentifier> {
    size?: DashboardSize
}

export interface DashboardWidgetDefinition<
    TIdentifier extends string,
    TDomains extends ReadonlyArray<keyof DomainData> = ReadonlyArray<
        keyof DomainData
    >,
    TStoreProps = null,
    TOptions = null
> extends WidgetDefinition<TIdentifier, TDomains, TStoreProps, TOptions> {
    type: WidgetType.Dashboard
    defaultSize: DashboardSize
    sizeCalculator?: (size: SizeConfig, options: TOptions) => DashboardSize
}
export type DashboardWidgetRegistry<TWidgetNames extends string> = {
    // any needed here to allow for correct type inference when creating widgets in the registry
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    [K in TWidgetNames]: DashboardWidgetDefinition<
        K,
        ReadonlyArray<keyof DomainData>,
        any,
        any
    >
}
