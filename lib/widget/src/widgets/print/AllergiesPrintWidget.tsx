import { FC } from 'react'

import { WidgetProps } from '../../types/base'
import { DefaultPrintWidgetStyles } from '../../controllers/listControllers/print/PrintWidgetContainer'
import { AllergiesPrintList } from '../../components/AllergiesPrintList'
import { AllergyIntolerance } from '../../models/models'
import { isBoolean, isNullishOrType } from '../../utilities'

interface StoreProps {
    allergies: ReadonlyArray<AllergyIntolerance>
}

export interface AllergiesPrintWidgetOptions {
    useLinked?: boolean
}

export const isAllergiesPrintWidgetOptions = (
    rawOpts: unknown
): rawOpts is AllergiesPrintWidgetOptions =>
    rawOpts != null &&
    typeof rawOpts === 'object' &&
    isNullishOrType(
        isBoolean,
        (rawOpts as AllergiesPrintWidgetOptions).useLinked
    )

type Props = WidgetProps<StoreProps, AllergiesPrintWidgetOptions>

export const AllergiesPrintWidget: FC<Props> = ({
    title,
    store: { allergies },
}: Props) => {
    return allergies != null ? (
        <DefaultPrintWidgetStyles className="allergies-print">
            <AllergiesPrintList title={title} allergies={allergies} />
        </DefaultPrintWidgetStyles>
    ) : null
}
