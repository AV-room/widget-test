import {
    IDSet,
    QuantifiedUnits,
    SizeInUnits,
    WidgetConfig,
} from './types/base';

export function logUnvalidatedWidgetConfig(
    rawConfig: ReadonlyArray<WidgetConfig<string>>,
    validatedConfig: ReadonlyArray<WidgetConfig<string>>
): void {
    if (validatedConfig.length < rawConfig.length) {
        console.warn(
            'One or more config items failed to validate as widget config type:'
        );
        rawConfig.forEach((rawC: { instanceId: string }) => {
            const validated = validatedConfig.find(
                (validatedC: { instanceId: string }) =>
                    rawC.instanceId === validatedC.instanceId
            );

            if (validated == null) {
                console.warn('❌', rawC);
            }
        });
    }
}

export function getGroupKey(idSet: IDSet): string {
    return Object.values(idSet)
        .filter((id) => id != null)
        .join('-');
}

export function asQuantifiedUnitsString(
    size?: QuantifiedUnits | SizeInUnits
): string | undefined {
    return size != null ? `${size.value}${size.unit}` : undefined;
}

export function isBoolean(x: unknown): x is boolean {
    return typeof x === 'boolean';
}

export type TypeGuard<T> = (o?: unknown) => o is T;

/**
 * Validates if the test value is null, undefined or of type T
 * @param guard Typeguard to use to validate when the value is not null
 * @param x Value to verify
 */
export function isNullishOrType<T>(
    guard: TypeGuard<T>,
    x: unknown
): x is T | null | undefined {
    return x == null || guard(x);
}

export function isNumber(x: unknown): x is number {
    return typeof x === 'number';
}

export function isNotNull<T>(o?: T | null | void): o is T {
    return o != null;
}

export function isString(x: unknown): x is string {
    return typeof x === 'string';
}
