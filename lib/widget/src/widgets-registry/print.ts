import {
    OptionValueType,
    SizeInFlex,
    SizeInWeighting,
    SizeUnits,
    SizingMethods,
    WidgetType,
} from '../types/base';

import {
    AlertsPrintWidget,
    isAlertsPrintWidgetOptions,
} from '../widgets/print/AlertsPrintWidget';
import {
    AllergiesPrintWidget,
    isAllergiesPrintWidgetOptions,
} from '../widgets/print/AllergiesPrintWidget';
import {
    isNotesPrintWidgetOptions,
    NotesPrintWidget,
} from '../widgets/print/NotesPrintWidget';
import { PrintWidgetRegistry } from '../types/print';
import { alertsPrintWidgetSelector } from '../selectors/alerts';
import { allergyPrintSelector } from '../selectors/allergies';
import { isEmptyOptions } from '../typeguards/base';
import { PatientPrintWidget } from '../widgets/print/PatientPrintWidget';
import { encounterSelector } from '../selectors/encounter';

const DEFAULT_HANDOVER_WIDGET_PRINT_SIZE: SizeInWeighting = {
    method: SizingMethods.weighting,
    value: 4,
};

const defaultHandoverReportWidgetSizeCalculator = (
    size: SizeInWeighting
): SizeInFlex => ({
    method: SizingMethods.flex,
    grow: 1,
    shrink: 1,
    minSize: { value: (size.value / 4) * 100, unit: SizeUnits['%'] },
});

export type HandoverReportWidgetNames =
    | 'AlertsPrint'
    | 'AllergiesPrint'
    | 'PatientPrint'
    | 'NotesPrint';

export const ReportWidgets: PrintWidgetRegistry<HandoverReportWidgetNames> = {
    NotesPrint: {
        id: 'NotesPrint',
        type: WidgetType.Print,
        displayName: 'Notes',
        description: 'Section for recording notes',
        categories: ['General'],
        domains: [],
        optionsValidator: isNotesPrintWidgetOptions,
        optionsMeta: [
            {
                name: 'height',
                label: 'Height (px)',
                valueType: OptionValueType.number,
                default: 25,
                required: false,
            },
        ],
        selector: null,
        component: NotesPrintWidget,
        defaultSize: DEFAULT_HANDOVER_WIDGET_PRINT_SIZE,
        sizeCalculator: defaultHandoverReportWidgetSizeCalculator,
    },
    AlertsPrint: {
        id: 'AlertsPrint',
        type: WidgetType.Print,
        displayName: 'Alerts',
        description: 'List of active patient alerts',
        categories: ['Alerts'],
        domains: ['flagList'],
        optionsValidator: isAlertsPrintWidgetOptions,
        optionsMeta: [
            {
                name: 'useLinked',
                label: 'Use linked patients?',
                valueType: OptionValueType.boolean,
                default: true,
                required: false,
            },
        ],
        selector: alertsPrintWidgetSelector,
        component: AlertsPrintWidget,
        defaultSize: DEFAULT_HANDOVER_WIDGET_PRINT_SIZE,
        sizeCalculator: defaultHandoverReportWidgetSizeCalculator,
    },
    AllergiesPrint: {
        id: 'AllergiesPrint',
        type: WidgetType.Print,
        displayName: 'Allergies and intolerances',
        description: 'List of active patient allergies/intolerances',
        categories: ['Allergies'],
        domains: ['allergyIntoleranceList'],
        optionsValidator: isAllergiesPrintWidgetOptions,
        optionsMeta: [
            {
                name: 'useLinked',
                label: 'Use linked patients?',
                valueType: OptionValueType.boolean,
                default: true,
                required: false,
            },
        ],
        selector: allergyPrintSelector,
        component: AllergiesPrintWidget,
        defaultSize: DEFAULT_HANDOVER_WIDGET_PRINT_SIZE,
        sizeCalculator: defaultHandoverReportWidgetSizeCalculator,
    },
    PatientPrint: {
        id: 'PatientPrint',
        type: WidgetType.Print,
        displayName: 'Patient details',
        description: 'Patient details',
        categories: ['Patient'],
        domains: ['patientList'],
        optionsValidator: isEmptyOptions,
        optionsMeta: [
            {
                name: 'useLinked',
                label: 'Use linked patients?',
                valueType: OptionValueType.boolean,
                default: true,
                required: false,
            },
        ],
        selector: encounterSelector,
        component: PatientPrintWidget,
        defaultSize: DEFAULT_HANDOVER_WIDGET_PRINT_SIZE,
        sizeCalculator: defaultHandoverReportWidgetSizeCalculator,
    },
};
