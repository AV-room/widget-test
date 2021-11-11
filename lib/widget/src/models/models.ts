export interface CodeableConceptLabels {
    shortName?: string | undefined;
    longName?: string | undefined;
}

export interface Coding {
    /** The identification of the code system that defines the meaning of the symbol in the code. */
    system: string;
    /** The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured. and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged. */
    version?: string | undefined;
    /** A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination). */
    code: string;
    /** A representation of the meaning of the code in the system, following the rules of the system. */
    display?: string | undefined;
    /** Indicates that this coding was chosen by a user directly - i.e. off a pick list of available items (codes or displays). */
    userSelected?: boolean | undefined;
    /** unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string | undefined;
}

export interface CodeableConcept {
    coding: Coding[];
    text: string;
    labels: CodeableConceptLabels;
}

export enum HumanNameUseEnum {
    Usual = 'usual',
    Official = 'official',
    Temp = 'temp',
    Nickname = 'nickname',
    Anonymous = 'anonymous',
    Old = 'old',
    Maiden = 'maiden',
}

export interface HumanName {
    use: HumanNameUseEnum;
    /** A full text representation of the name. */
    text: string;
    /** The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father. */
    family?: string | undefined;
    /** Given name. */
    given: string[];
    /** Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name. */
    prefix: string[];
    /** Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name. */
    suffix: string[];
    /** unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string | undefined;
}

export enum IdentifierUseEnum {
    Usual = 'usual',
    Official = 'official',
    Temp = 'temp',
    Secondary = 'secondary',
}

export interface Identifier {
    use?: IdentifierUseEnum;
    type?: CodeableConcept;
    /** Establishes the namespace for the value - that is, a URL that describes a set values that are unique. */
    system?: string | undefined;
    /** The portion of the identifier typically relevant to the user and which is unique within the context of the system. */
    value?: string | undefined;
    /** unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string | undefined;
}

export interface Encounter {
    /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
    id: string;
}

export interface Patient {
    /** An identifier for this patient. */
    identifier: Identifier[];
    primaryIdentifier?: Identifier;
    /** Whether this patient record is in active use. */
    active?: boolean | undefined;
    /** A name associated with the individual. */
    name: HumanName[];
    /** The date of birth for the individual. */
    birthDate?: string | undefined;
    /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
    id: string;
}

export interface Flag {
    category?: CodeableConcept;
    code: CodeableConcept;
    /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
    id: string;
}

export enum AllergyIntoleranceTypeEnum {
    Allergy = 'allergy',
    Intolerance = 'intolerance',
    Unknown = 'unknown',
}

export enum AllergyIntoleranceCategoryEnum {
    Food = 'food',
    Medication = 'medication',
    Environment = 'environment',
    Biologic = 'biologic',
}

export enum AllergyIntoleranceCriticalityEnum {
    Low = 'low',
    High = 'high',
    UnableToAssess = 'unable-to-assess',
}

export interface AllergyIntolerance {
    type: AllergyIntoleranceTypeEnum;
    /** Category of the identified substance. */
    category: AllergyIntoleranceCategoryEnum[];
    criticality?: AllergyIntoleranceCriticalityEnum;
    code?: CodeableConcept;
}

export interface LinkedPatients {
    readonly requested: Patient;
    readonly primary: Patient | null;
    readonly linked: ReadonlyArray<Patient>;
}

export interface ReduxIndex<T = Array<string>> {
    [key: string]: T | undefined;
}
