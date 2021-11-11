import { createSelector, ParametricSelector, Selector } from 'reselect'

import { DomainData } from '../types/base'
import { createGroupSelector } from './baseSelectors'
import { AlertsPrintWidgetOptions } from '../widgets/print/AlertsPrintWidget'
import { Flag, LinkedPatients, ReduxIndex } from '../models/models'

type AlertDomainSlice = Pick<DomainData, 'flagList'>

const EMPTY_ALERTS = { alerts: [] as const } as const
const selectEmptyAlerts = (): typeof EMPTY_ALERTS => EMPTY_ALERTS

const selectFlagIndex = (state: AlertDomainSlice): ReduxIndex<Flag> =>
    state.flagList.indexByOwnId
const selectFlagIdByPatientId = (
    state: AlertDomainSlice,
    patientId: string
): Array<string> | undefined => state.flagList.indexByPatientId[patientId]

const EMPTY_ITEMS: Array<never> = []
export const makeGetFlagByPatient = (): ParametricSelector<
    AlertDomainSlice,
    string,
    ReadonlyArray<Flag>
> => {
    //  const createUniqueFlags = makeCreateUniqueFlags()

    return createSelector(
        [selectFlagIndex, selectFlagIdByPatientId],
        (
            flagsByOwnId: ReduxIndex<Flag>,
            flagIds: Array<string> | undefined
        ): ReadonlyArray<Flag> => {
            if (flagIds == null || flagIds.length === 0) {
                return EMPTY_ITEMS
            }

            const flags = flagIds
                .map((id) => flagsByOwnId[id])
                .filter((f) => f != null) as Array<Flag>
            return flags
        }
    )
}

export const makeAlertSelector = (
    linkedPatients?: LinkedPatients,
    useLinked?: boolean
): Selector<AlertDomainSlice, { alerts: ReadonlyArray<Flag> }> => {
    const getFlagByPatientId = makeGetFlagByPatient()

    return linkedPatients == null
        ? selectEmptyAlerts
        : createSelector(
              [
                  (state: AlertDomainSlice) =>
                      getFlagByPatientId(state, linkedPatients.requested.id),
                  (state: AlertDomainSlice) =>
                      linkedPatients.primary != null
                          ? getFlagByPatientId(state, linkedPatients.primary.id)
                          : [],

                  (state: AlertDomainSlice) =>
                      linkedPatients.linked.flatMap((lp) =>
                          getFlagByPatientId(state, lp.id)
                      ),
              ],
              (
                  requestedPatientFlags
                  //  primaryPatientFlags,
                  //  linkedPatientFlags
              ) => ({
                  alerts: requestedPatientFlags,
              })
          )
}

export const alertsPrintWidgetSelector = createGroupSelector<
    ['flagList'],
    { alerts: ReadonlyArray<Flag> },
    AlertsPrintWidgetOptions
>(({ idSet: { linkedPatients }, options: { useLinked } }) =>
    makeAlertSelector(linkedPatients, useLinked)
)
