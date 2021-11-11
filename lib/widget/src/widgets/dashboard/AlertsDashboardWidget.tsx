import { FC } from 'react'

import styled from 'styled-components'

import { WidgetProps } from '../../types/base'
import { Flag } from '../../models/models'

const Container = styled.div`
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .tag {
        background-color: #c60404;
        color: #fff;
        padding: 2px 4px;
        border-radius: 2px;
        font-size: 12px;
    }
`

interface StoreProps {
    alerts: ReadonlyArray<Flag>
}

export interface AlertsDashboardWidgetOptions {
    useLinked?: boolean
}

export const isAlertsDashboardWidgetOptions = (
    rawOpts: unknown
): rawOpts is AlertsDashboardWidgetOptions =>
    rawOpts !== null &&
    typeof rawOpts === 'object' &&
    typeof (rawOpts as AlertsDashboardWidgetOptions)?.useLinked === 'boolean'

type Props = WidgetProps<StoreProps, AlertsDashboardWidgetOptions>

export const AlertsDashboardWidget: FC<Props> = ({
    store: { alerts },
}: Props) => {
    const relevantAlerts = alerts ?? []

    return (
        <Container className="alerts-dashboard">
            {relevantAlerts.length > 0 ? (
                <span className="tag">Alerts</span>
            ) : null}
        </Container>
    )
}
