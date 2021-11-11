import {
    DomainData,
    // GeneralConfig,
    Size,
    SizeInWeighting,
    WidgetConfig,
    WidgetDefinition,
    WidgetType,
} from './base'

export interface PrintWidgetConfig<TIdentifier extends string>
    extends WidgetConfig<TIdentifier> {
    size: SizeInWeighting
}

export interface PrintWidgetDefinition<
    TIdentifier extends string,
    TDomains extends ReadonlyArray<keyof DomainData> = ReadonlyArray<
        keyof DomainData
    >,
    TStoreProps = null,
    TOptions = null
> extends WidgetDefinition<TIdentifier, TDomains, TStoreProps, TOptions> {
    type: WidgetType.Print
    sizeCalculator: (size: SizeInWeighting, options: TOptions) => Size
    defaultSize: SizeInWeighting
    minWeightCalculator?: (options: TOptions) => SizeInWeighting
}

export type PrintWidgetRegistry<TWidgetNames extends string> = {
    // any needed here to allow for correct type inference when creating widgets in the registry
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    [K in TWidgetNames]: PrintWidgetDefinition<
        K,
        ReadonlyArray<keyof DomainData>,
        any,
        any
    >
}
