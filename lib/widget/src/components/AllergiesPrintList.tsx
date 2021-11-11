import { FC } from 'react';
import {
    AllergyIntolerance,
    AllergyIntoleranceTypeEnum,
} from '../models/models';

interface AllergyListItemProps {
    type: string;
    allergies: ReadonlyArray<AllergyIntolerance>;
}

const AllergyListItem: FC<AllergyListItemProps> = ({
    type,
    allergies,
}: AllergyListItemProps) => {
    return (
        <li className="widget-kv-list-item">
            <span className="code-text">{type}: </span>
            {`${allergies
                .map((a: AllergyIntolerance) => a.code?.text ?? '')
                .join(', ')}`}
        </li>
    );
};

type AllergyIntoleranceByType = {
    [key in AllergyIntoleranceTypeEnum]: ReadonlyArray<AllergyIntolerance>;
};

interface AllergiesPrintListProps {
    title?: string;
    allergies: ReadonlyArray<AllergyIntolerance>;
}

export const AllergiesPrintList: FC<AllergiesPrintListProps> = ({
    allergies,
    title,
}: AllergiesPrintListProps) => {
    const allergiesByType: AllergyIntoleranceByType = allergies.reduce(
        (acc: AllergyIntoleranceByType, a: AllergyIntolerance) => {
            const defaultType = AllergyIntoleranceTypeEnum.Unknown;
            return {
                ...acc,
                [a.type ?? defaultType]: [...acc[a.type ?? defaultType], a],
            };
        },
        {
            [AllergyIntoleranceTypeEnum.Allergy]: [],
            [AllergyIntoleranceTypeEnum.Intolerance]: [],
            [AllergyIntoleranceTypeEnum.Unknown]: [],
        }
    );

    return (
        <div className="allergies-print-list">
            <h3 className="widget-title">
                {title ?? 'Allergies and Intolerances'}
            </h3>
            {allergies.length > 0 ? (
                <ul className="widget-kv-list">
                    {allergiesByType.allergy.length > 0 && (
                        <AllergyListItem
                            type="Allergies"
                            allergies={allergiesByType.allergy}
                        />
                    )}
                    {allergiesByType.intolerance.length > 0 && (
                        <AllergyListItem
                            type="Intolerances"
                            allergies={allergiesByType.intolerance}
                        />
                    )}
                    {allergiesByType.unknown.length > 0 && (
                        <AllergyListItem
                            type="Unknown"
                            allergies={allergiesByType.unknown}
                        />
                    )}
                </ul>
            ) : (
                <p className="widget-kv-list-no-items">
                    No reported active allergies or intolerances.
                </p>
            )}
        </div>
    );
};
