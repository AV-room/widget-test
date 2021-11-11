import { SizeUnits, SizingMethods, WidgetType } from '../types/base'
import { isEmptyOptions } from '../typeguards/base'
import { PatientDashboardWidget } from '../widgets/dashboard/PatientDashboardWidget'
import {
    AlertsDashboardWidget,
    isAlertsDashboardWidgetOptions,
} from '../widgets/dashboard/AlertsDashboardWidget'

import { DashboardWidgetRegistry } from '../types/dashboard'
import { alertsPrintWidgetSelector } from '../selectors/alerts'

export type InpatientDashboardWidgetNames =
    | 'AlertsDashboard'
    | 'PatientDashboard'

export const DashboardWidgets: DashboardWidgetRegistry<InpatientDashboardWidgetNames> =
    {
        PatientDashboard: {
            id: 'PatientDashboard',
            type: WidgetType.Dashboard,
            displayName: 'Dashboard patient details',
            description: 'Patient identifier',
            categories: ['Patient'],
            domains: [],
            optionsValidator: isEmptyOptions,
            selector: null,
            component: PatientDashboardWidget,
            defaultSize: {
                width: {
                    method: SizingMethods.units,
                    value: 100,
                    unit: SizeUnits.px,
                },
            },
        },
        AlertsDashboard: {
            id: 'AlertsDashboard',
            type: WidgetType.Dashboard,
            displayName: 'Dashboard alerts',
            description: 'Indicates if the patient has an active alert',
            categories: ['Alerts'],
            domains: ['flagList'],
            optionsValidator: isAlertsDashboardWidgetOptions,
            selector: alertsPrintWidgetSelector,
            component: AlertsDashboardWidget,
            defaultSize: {
                width: {
                    method: SizingMethods.units,
                    value: 60,
                    unit: SizeUnits.px,
                },
            },
        },
    }
