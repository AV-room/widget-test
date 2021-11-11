// print widget
import { isSizeInWeighting, isWidgetConfig } from './base'
import { PrintWidgetConfig, PrintWidgetDefinition } from '../types/print'
import { DomainData, WidgetDefinition, WidgetType } from '../types/base'

export const isPrintWidgetConfig = <TIdentifier extends string>(
    o: unknown
): o is PrintWidgetConfig<TIdentifier> =>
    isWidgetConfig(o) &&
    isSizeInWeighting((o as PrintWidgetConfig<TIdentifier>).size)

export function isPrintWidgetDefinition<
    TIdentifier extends string,
    TDomains extends ReadonlyArray<keyof DomainData> = ReadonlyArray<
        keyof DomainData
    >,
    TStoreProps = null,
    TOptions = null
>(
    w: WidgetDefinition<TIdentifier, TDomains, TStoreProps, TOptions>
): w is PrintWidgetDefinition<TIdentifier, TDomains, TStoreProps, TOptions> {
    const pw = w as PrintWidgetDefinition<
        TIdentifier,
        TDomains,
        TStoreProps,
        TOptions
    >

    return (
        pw.type === WidgetType.Print &&
        isSizeInWeighting(pw.defaultSize) &&
        (pw.sizeCalculator == null || typeof pw.sizeCalculator === 'function')
    )
}
