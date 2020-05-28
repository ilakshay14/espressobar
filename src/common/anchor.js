import React from 'react';

const Anchor = ({ href, children }) => {
    return (
        <a href={href}>{children}</a>
    );
}

export default Anchor;