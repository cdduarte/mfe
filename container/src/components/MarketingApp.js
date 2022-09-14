import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    // We are getting a reference to the html element on the screen
    const ref = useRef(null);
    const history = useHistory();

    // ref.current is a reference to the html element.
    // mount will the take the reference and try to render it into react div.
    // Remember each service is completely decoupled from the other and
    // have no knowledge of the frameworks being used in the other service
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname}) => {
                const { pathname } = history.location;

                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />
};