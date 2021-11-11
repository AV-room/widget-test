import { FC } from 'react'

import { WidgetProps } from '../../types/base'
import { DefaultPrintWidgetStyles } from '../../controllers/listControllers/print/PrintWidgetContainer'
import { AlertsPrintList } from '../../components/AlertsPrintList'
import { Flag } from '../../models/models'

interface StoreProps {
    alerts: ReadonlyArray<Flag>
}

export interface AlertsPrintWidgetOptions {
    useLinked?: boolean
}

export const isAlertsPrintWidgetOptions = (
    rawOpts: unknown
): rawOpts is AlertsPrintWidgetOptions =>
    rawOpts != null &&
    typeof rawOpts === 'object' &&
    typeof (rawOpts as AlertsPrintWidgetOptions)?.useLinked === 'boolean'

type Props = WidgetProps<StoreProps, AlertsPrintWidgetOptions>

export const AlertsPrintWidget: FC<Props> = ({
    title,
    store: { alerts },
}: Props) => {
    return alerts != null ? (
        <DefaultPrintWidgetStyles className="alerts-print">
            <AlertsPrintList title={title} alerts={alerts} />
        </DefaultPrintWidgetStyles>
    ) : null
}
