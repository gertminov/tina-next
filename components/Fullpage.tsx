import React from 'react';

function Fullpage({children}:{children:React.ReactNode}) {
    return (

        <div className="flex grow flex-col items-center">
            <div className="h-[10vh]"></div>
            {children}
        </div>
    );
}

export default Fullpage;