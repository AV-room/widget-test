import { createSelector } from 'reselect';

import { createGroupSelector } from './baseSelectors';
import { DomainData } from '../types/base';
import { Encounter } from '../models/models';

type EncounterDomainSlice = Pick<DomainData, 'encounterList'>;

const EMPTY_ENCOUNTER = { encounter: undefined } as const;
const selectEmptyEncounter = (): typeof EMPTY_ENCOUNTER => EMPTY_ENCOUNTER;

export interface SelectedEncounter {
    encounter?: Encounter;
}

export const encounterSelector = createGroupSelector<
    ['encounterList'],
    SelectedEncounter,
    null
>(({ idSet: { encounterId } }) =>
    encounterId == null
        ? selectEmptyEncounter
        : createSelector(
              [
                  (domain: EncounterDomainSlice) =>
                      domain.encounterList.indexByOwnId,
              ],
              (encountersByOwnId): SelectedEncounter => ({
                  encounter: encountersByOwnId[encounterId],
              })
          )
);
