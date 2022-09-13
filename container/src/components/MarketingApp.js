import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    // We are getting a reference to the html element on the screen
    const ref = useRef(null);

    // ref.current is a reference to the html element.
    // mount will the take the reference and try to render it into react div.
    // Remember each service is completely decoupled from the other and
    // have no knowledge of the frameworks being used in the other service
    useEffect(() => {
        mount(ref.current);
    });

    return <div ref={ref} />
};