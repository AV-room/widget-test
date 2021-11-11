import { FC } from 'react'

import { SizeUnits, WidgetProps } from '../../types/base'
import {
    asQuantifiedUnitsString,
    isNullishOrType,
    isNumber,
} from '../../utilities'
import { DefaultPrintWidgetStyles } from '../../controllers/listControllers/print/PrintWidgetContainer'

interface NotesPrintWidgetOptions {
    height: number
}

export const isNotesPrintWidgetOptions = (
    rawOpts: unknown
): rawOpts is NotesPrintWidgetOptions =>
    rawOpts != null &&
    typeof rawOpts === 'object' &&
    isNullishOrType(isNumber, (rawOpts as NotesPrintWidgetOptions).height)

type Props = WidgetProps<null, NotesPrintWidgetOptions>

// height is a dynamic style so applying it as an inline style to make sure it is adopted in the print layout
export const NotesPrintWidget: FC<Props> = ({
    title,
    options: { height },
}: Props) => {
    return (
        <DefaultPrintWidgetStyles
            className="notes-print"
            style={{
                height:
                    asQuantifiedUnitsString({
                        value: height,
                        unit: SizeUnits.px,
                    }) ?? 'auto',
            }}
        >
            <h4 className="widget-title">{`${title ?? 'Notes'}:`}</h4>
        </DefaultPrintWidgetStyles>
    )
}
