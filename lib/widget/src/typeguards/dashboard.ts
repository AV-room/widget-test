// dashboard widget
import { DomainData, WidgetDefinition, WidgetType } from '../types/base'
import { isSizeInUnits, isWidgetConfig } from './base'
import { isNullishOrType } from '../utilities'
import {
    DashboardSize,
    DashboardWidgetConfig,
    DashboardWidgetDefinition,
} from '../types/dashboard'

const isDashboardSize = (o: unknown): o is DashboardSize =>
    o != null &&
    typeof o === 'object' &&
    isSizeInUnits((o as DashboardSize).width)

export const isDashboardWidgetConfig = <TIdentifier extends string>(
    o: unknown
): o is DashboardWidgetConfig<TIdentifier> =>
    isWidgetConfig(o) &&
    isNullishOrType(
        isDashboardSize,
        (o as DashboardWidgetConfig<TIdentifier>).size
    )

export function isDashboardWidgetDefinition<
    TIdentifier extends string,
    TDomains extends ReadonlyArray<keyof DomainData> = ReadonlyArray<
        keyof DomainData
    >,
    TStoreProps = null,
    TOptions = null
>(
    w: WidgetDefinition<TIdentifier, TDomains, TStoreProps, TOptions>
): w is DashboardWidgetDefinition<
    TIdentifier,
    TDomains,
    TStoreProps,
    TOptions
> {
    const dw = w as DashboardWidgetDefinition<
        TIdentifier,
        TDomains,
        TStoreProps,
        TOptions
    >

    return (
        dw.type === WidgetType.Dashboard &&
        isDashboardSize(dw.defaultSize) &&
        (dw.sizeCalculator == null || typeof dw.sizeCalculator === 'function')
    )
}
