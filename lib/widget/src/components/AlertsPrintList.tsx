import { FC } from 'react'
import { Flag } from '../models/models'

interface AlertsPrintListProps {
    title?: string
    alerts: ReadonlyArray<Flag>
}

export const AlertsPrintList: FC<AlertsPrintListProps> = ({
    title,
    alerts,
}: AlertsPrintListProps) => (
    <div className="alerts-print-list">
        <h3 className="widget-title">{title ?? 'Alerts'}</h3>
        {alerts.length > 0 ? (
            <ul className="widget-kv-list">
                {alerts.map((alert: Flag) => (
                    <li key={alert.id} className="widget-kv-list-item">
                        <span className="code-text">{alert.code.text}</span>
                        {alert.category?.text != null
                            ? ` (${alert.category.text})`
                            : ''}
                    </li>
                ))}
            </ul>
        ) : (
            <p className="widget-kv-list-no-items">No active alerts.</p>
        )}
    </div>
)
