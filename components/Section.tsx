import React, {FunctionComponent} from 'react';

type SectionProps = {
    title:string
    children: React.ReactNode
}

const Section:FunctionComponent<SectionProps> = (props) => {
    return (
        <section className="py-4">
            <h2 className="font-serif my-8">{props.title}</h2>
            <div className="flex flex-col gap-4">{props.children}</div>
        </section>
    );
}

export default Section;