import {
    Size,
    SizeConfig,
    SizeInUnits,
    SizeInWeighting,
    SizeUnits,
    SizingMethods,
    WidgetConfig,
    WidgetConfigError,
} from '../types/base';
import { isNullishOrType, isNumber, isString } from '../utilities';

export function isSizeInUnits(o: unknown): o is SizeInUnits {
    if (typeof o !== 'object' || o == null) return false;

    return (
        (o as SizeInUnits).method === SizingMethods.units &&
        isNumber((o as SizeInUnits).value) &&
        Object.values(SizeUnits).includes((o as SizeInUnits).unit)
    );
}

export function isSizeInWeighting(o: unknown): o is SizeInWeighting {
    if (typeof o !== 'object' || o == null) return false;

    return (
        (o as SizeInWeighting).method === SizingMethods.weighting &&
        isNumber((o as SizeInUnits).value)
    );
}

export function isSize(o: unknown): o is Size {
    if (typeof o !== 'object' || o == null) return false;

    const c: Size = o as Size;
    switch (c.method) {
        case SizingMethods.units:
            return (
                isNumber(c.value) && Object.values(SizeUnits).includes(c.unit)
            );
        case SizingMethods.flex:
            return (
                isNumber(c.grow) &&
                isNumber(c.shrink) &&
                c.minSize != null &&
                isNumber(c.minSize.value) &&
                Object.values(SizeUnits).includes(c.minSize.unit)
            );
        default:
            return false;
    }
}

// widget config
export function isSizeConfig(o: unknown): o is SizeConfig {
    if (typeof o !== 'object' || o == null) return false;

    const c: SizeConfig = o as SizeConfig;
    return isSize(c) || (c.method === SizingMethods.items && isNumber(c.value));
}

export const isWidgetConfig = <TIdentifier extends string>(
    o: unknown
): o is WidgetConfig<TIdentifier> => {
    if (typeof o !== 'object' || o == null) return false;

    const c = o as WidgetConfig<TIdentifier>;
    return (
        isString(c.instanceId) &&
        isString(c.widgetId) &&
        isNullishOrType(isString, c.title) &&
        typeof c.options === 'object'
    );
};

export const isWidgetConfigError = (o: unknown): o is WidgetConfigError => {
    if (typeof o !== 'object' || o == null) return false;

    return (
        isString((o as WidgetConfigError)?.error) &&
        isString((o as WidgetConfigError)?.erroredConfig)
    );
};

export const isEmptyOptions = (
    rawOpts: unknown
): rawOpts is Record<string, never> =>
    typeof rawOpts === 'object' &&
    Object.keys(rawOpts as Record<string, unknown>).length === 0;
