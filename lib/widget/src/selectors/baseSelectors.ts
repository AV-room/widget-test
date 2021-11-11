import { createSelector } from 'reselect';

import {
    DomainData,
    GroupSelectorParams,
    WidgetGroupSelectorFactory,
} from '../types/base';

/**
 * Returns a selector factory creating a selector that memoizes a widget instance's selection of domain data
 * on its options and group's param set.
 * This is needed to prevent unnecessary rerenders of the widget if its options and group params have not changed
 * e.g. when the list rerenders.
 * @param selectorFactory Factory function creating a selector that selects domain data required by a widget
 * from the subset of domains defined in its 'domains'. This is the selector declared in the widget's registration.
 */
export function createGroupSelector<
    TDomains extends ReadonlyArray<keyof DomainData>,
    TStoreProps,
    TOptions = null
>(
    selectorFactory: WidgetGroupSelectorFactory<TOptions, TDomains, TStoreProps>
): WidgetGroupSelectorFactory<TOptions, TDomains, TStoreProps> {
    return createSelector(
        [
            (params: GroupSelectorParams<TOptions>) => params.idSet,
            (params: GroupSelectorParams<TOptions>) => params.options,
        ],
        (idSet, options) => selectorFactory({ idSet, options })
    );
}
