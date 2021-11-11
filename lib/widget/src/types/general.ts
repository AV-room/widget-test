import {
    AllergyIntolerance,
    Encounter,
    Flag,
    Patient,
    ReduxIndex,
} from '../models/models';

export interface PatientList {
    indexByOwnId: ReduxIndex<Patient>;
}

export interface EncounterList {
    indexByOwnId: ReduxIndex<Encounter>;

    indexByPatientIdentifier: ReduxIndex;
    indexOpenEncounterByPatientIdentifier: ReduxIndex;
}

export interface FlagState {
    indexByOwnId: ReduxIndex<Flag>;
    indexByPatientId: ReduxIndex;
    indexByEncounterId: ReduxIndex;
}

export type AllergyIntoleranceMapByPatientIdentifier = Map<
    string,
    Map<string, AllergyIntolerance>
>;
export interface AllergyIntoleranceList {
    mapByIdentifier: Map<string, AllergyIntolerance>;
    mapByPatientIdentifier: AllergyIntoleranceMapByPatientIdentifier;
}
