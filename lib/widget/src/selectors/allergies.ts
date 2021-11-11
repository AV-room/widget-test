import { createSelector, Selector } from 'reselect';
import { DomainData } from '../types/base';
import { createGroupSelector } from './baseSelectors';
import { AllergiesPrintWidgetOptions } from '../widgets/print/AllergiesPrintWidget';
import { AllergyIntolerance, LinkedPatients } from '../models/models';

type AllergyDomainSlice = Pick<DomainData, 'allergyIntoleranceList'>;

const EMPTY_ALLERGIES = { allergies: [] as const } as const;
const selectEmptyAllergies = (): typeof EMPTY_ALLERGIES => EMPTY_ALLERGIES;

export const makeAllergySelector = (
    linkedPatients?: LinkedPatients,
    useLinked?: boolean
): Selector<
    AllergyDomainSlice,
    { allergies: ReadonlyArray<AllergyIntolerance> }
> =>
    linkedPatients == null
        ? selectEmptyAllergies
        : createSelector(
              [
                  (domain: AllergyDomainSlice) =>
                      domain.allergyIntoleranceList.mapByPatientIdentifier,
              ],
              (
                  allergiesMappedByPatientIdentifier: Map<
                      string,
                      Map<string, AllergyIntolerance>
                  >
              ) => {
                  const ids: ReadonlyArray<string> = [
                      linkedPatients.requested.id,
                  ];

                  return {
                      allergies: ids.flatMap((pid) =>
                          Array.from(
                              allergiesMappedByPatientIdentifier
                                  .get(pid)
                                  ?.values() ?? []
                          )
                      ),
                  };
              }
          );

export const allergyPrintSelector = createGroupSelector<
    ['allergyIntoleranceList'],
    { allergies: ReadonlyArray<AllergyIntolerance> },
    AllergiesPrintWidgetOptions
>(({ idSet: { linkedPatients }, options: { useLinked } }) =>
    makeAllergySelector(linkedPatients, useLinked)
);
