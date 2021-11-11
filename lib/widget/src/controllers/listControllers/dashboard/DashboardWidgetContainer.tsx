import { FC, PropsWithChildren } from 'react'

import { Size, SizingMethods } from '../../../types/base'
import { asQuantifiedUnitsString } from '../../../utilities'

export interface DashboardWidgetContainerProps {
    width: Size
    className: string
}

export const DashboardWidgetContainer: FC<DashboardWidgetContainerProps> = ({
    width,
    className,
    children,
}: PropsWithChildren<DashboardWidgetContainerProps>) => {
    // inline styles preferred here over styled components to keep things performant
    switch (width.method) {
        case SizingMethods.units:
            return (
                <div
                    style={{ width: asQuantifiedUnitsString(width) }}
                    className={className}
                >
                    {children}
                </div>
            )
        default:
            return <div className={className}>{children}</div>
    }
}
