import React from 'react';
import CertificateTile, {Cert} from "./CertificateTile";

function Certificates() {
    const certificates: Cert[] = [
        {
            name: "Google Digital Garage",
            img: "/digitalGarage.webp"
        },
        {
            name: "Gruppenlerterin GCL",
            img: "/gruppenleiter.webp"
        },
        {
            name: "Augen auf - hinsehen!",
            img: "/aufenauf.webp"
        }
    ]
    return (
        <section className="min-h-[90vh] flex flex-col items-center">
            <h1 className="font-serif m-12">Certificates</h1>
            <div className="flex grow flex-wrap w-full justify-center gap-4">
                {certificates.map(e => (<CertificateTile key={e.name} {...e}/>))}
            </div>
        </section>
    );
}

export default Certificates;