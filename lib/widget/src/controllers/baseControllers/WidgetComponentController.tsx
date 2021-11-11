import { ReactElement } from 'react';

import {
    BaseWidgetContainerProps,
    DomainData,
    IDSet,
    WidgetContainer,
    WidgetInstance,
} from '../../types/base';

type WidgetComponentControllerProps<
    TWidgetContainerProps extends BaseWidgetContainerProps
> = {
    container: WidgetContainer<TWidgetContainerProps>;
    domainData: DomainData;
    idSet: IDSet;
    widget: WidgetInstance<TWidgetContainerProps>;
};

export const WidgetComponentController = <
    TWidgetContainerProps extends BaseWidgetContainerProps
>({
    widget: {
        title,
        selector,
        component: WidgetComponent,
        options,
        containerProps,
    },
    container: Container,
    idSet,
    domainData,
}: WidgetComponentControllerProps<TWidgetContainerProps>): ReactElement => {
    const relevantDomainData =
        selector != null ? selector({ idSet, options })(domainData, null) : {};

    return (
        // Spreading is the only way to pass down the props object as this is generic and we do not know all of its keys
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Container
            {...containerProps}
            className={`widget ${containerProps.className}`}
        >
            <WidgetComponent
                title={title}
                idSet={idSet}
                store={relevantDomainData}
                options={options}
            />
        </Container>
    );
};
