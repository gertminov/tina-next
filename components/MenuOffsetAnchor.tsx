import React from 'react';

function MenuOffsetAnchor({id}:{id:string}) {
    return (
        <a id={id} className="absolute -top-[10vh]"/>
    );
}

export default MenuOffsetAnchor;