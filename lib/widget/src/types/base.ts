import { ComponentType, PropsWithChildren } from 'react';

import { ParametricSelector } from 'reselect';

import { LinkedPatients } from '../models/models';
import { TypeGuard } from '../utilities';
import {
    AllergyIntoleranceList,
    EncounterList,
    FlagState,
    PatientList,
} from './general';

export const EMPTY_ITEMS: Array<never> = [];

export enum WidgetType {
    Print = 'Print',
    Dashboard = 'Dashboard',
}

/** Size */
export enum SizingMethods {
    'units' = 'units',
    'items' = 'items',
    'flex' = 'flex',
    'weighting' = 'weighting',
}
export enum SizeUnits {
    'px' = 'px',
    'rem' = 'rem',
    '%' = '%',
    'vh' = 'vh',
    'vw' = 'vw',
}

export type QuantifiedUnits = { value: number; unit: SizeUnits };
export type SizeInUnits = { method: SizingMethods.units } & QuantifiedUnits;
export type SizeInFlex = {
    method: SizingMethods.flex;
    grow: number;
    shrink: number;
    minSize: QuantifiedUnits;
};
export type SizeInItems = { method: SizingMethods.items; value: number };
export type SizeInWeighting = {
    method: SizingMethods.weighting;
    value: number;
};

export type Size = SizeInUnits | SizeInFlex;
export type SizeConfig = Size | SizeInItems | SizeInWeighting;

/**
 * An overloaded set of ids that may be required by a widget group.
 */
export interface IDSet {
    encounterId?: string;
    linkedPatients?: LinkedPatients;
    bedId?: string;
    partyId?: string;
}

/**
 * A light-weight copy of the redux store Domain object.
 * Provides an interface for widgets defined in this library to access domain data.
 */
export type DomainData = {
    patientList: PatientList;
    encounterList: EncounterList;
    flagList: FlagState;
    allergyIntoleranceList: AllergyIntoleranceList;
};

/** Used by {@link createGroupSelector} */
export type GroupSelectorParams<TOptions> = {
    idSet: IDSet;
    options: TOptions;
};

export type WidgetProps<TStoreProps, TOptions> = {
    title?: string;
    idSet: IDSet;
    store: TStoreProps | Record<string, never>;
    options: TOptions;
};

/**
 * Miya configured widget definition.
 * Holds widget identifier and configured options from Configurator.
 */
export interface WidgetConfig<TIdentifier extends string> {
    /** Widget instance key. */
    instanceId: string;

    /** Widget registry id. */
    widgetId: TIdentifier;

    /** Widget title. */
    title?: string;

    /** Configured options. */
    options: unknown;
}

export interface WidgetConfigError {
    instanceId: string;
    error: string;
    erroredConfig: string;
}

export type WidgetGroupSelector<
    TDomains extends ReadonlyArray<keyof DomainData>,
    TStoreProps
> = ParametricSelector<Pick<DomainData, TDomains[number]>, null, TStoreProps>;
export type WidgetGroupSelectorFactory<
    TOptions,
    TDomains extends ReadonlyArray<keyof DomainData>,
    TStoreProps
> = (
    params: GroupSelectorParams<TOptions>
) => WidgetGroupSelector<TDomains, TStoreProps>;

export interface BaseWidgetContainerProps {
    className: string;
}

export enum OptionValueType {
    boolean = 'boolean',
    string = 'string',
    number = 'number',
    stringArray = 'stringArray',
}

export interface OptionMetadata {
    name: string;
    label: string;
    description?: string;
    valueType: OptionValueType;
    default: boolean | string | number | Array<string>;
    required: boolean;
}

/**
 * Miya generic widget definition.
 * Defines the view component, required domain data and metadata of a widget.
 * Typed over a subset of domains defined by TDomains to restrict the domain data type used by the widget's selector.
 */
export interface WidgetDefinition<
    TIdentifier extends string,
    TDomains extends ReadonlyArray<keyof DomainData> = ReadonlyArray<
        keyof DomainData
    >,
    TStoreProps = null,
    TOptions = null
> {
    /** Identifier of the widget. */
    id: TIdentifier;

    /** Friendly widget name, shown in Configurator. */
    displayName: string;

    /** Title or label, to be used in actual widget. */
    title?: string;

    /** Short description of widget's purpose. */
    description: string;

    /** Categories under which the widget can be found when the user filters widgets on the Configurator UI. */
    categories: ReadonlyArray<string>;

    /**
     * An array of DomainData keys.
     * Used to restrict the domain data type used by the widget's selector,
     * and inform subscription and data query logic on what to load.
     */
    domains: TDomains;

    /** The type guard used to validate the widget's raw options object. */
    optionsValidator: TypeGuard<TOptions>;

    /** Metadata used to create form fields for editing widget option values.
     *  Only required for widgets shown in a visual editor.
     * */
    optionsMeta?: ReadonlyArray<OptionMetadata>;

    /**
     * Factory function that builds a selector over a restricted `DomainData` for the data required by the widget.
     * A widget's @see {@link domains} property is used to restrict the domain data type used by the widget's selector.
     *
     * The result of this function should be memoized over its parameters. @see {@link createGroupSelector}
     */
    selector: WidgetGroupSelectorFactory<
        TOptions,
        TDomains,
        TStoreProps
    > | null;

    /** The component used to render the widget.
     * The component will receive a set of props that is a union of derived organisation node configuration,
     * props extracted from DomainData, and widget option values selected by the user in Configurator.
     * */
    component: ComponentType<WidgetProps<TStoreProps, TOptions>>;
}

export type WidgetContainer<TProps extends BaseWidgetContainerProps> =
    ComponentType<PropsWithChildren<TProps>>;

/**
 * Merges widget instance values from config with corresponding widget definition values.
 */
export interface WidgetInstance<
    TContainerProps extends BaseWidgetContainerProps,
    TDomains extends ReadonlyArray<keyof DomainData> = ReadonlyArray<
        keyof DomainData
    >,
    TStoreProps = null,
    TOptions = null
> {
    /** Guid ID for widget instance. */
    instanceId: string;
    title?: string;
    selector: WidgetGroupSelectorFactory<
        TOptions,
        TDomains,
        TStoreProps
    > | null;
    component: ComponentType<WidgetProps<TStoreProps, TOptions>>;

    /** Props controlling widget container sizing and layout */
    containerProps: TContainerProps;

    /** Configured options for this widget. */
    options: TOptions;
}
