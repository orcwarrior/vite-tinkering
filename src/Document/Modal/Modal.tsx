import React from 'react';
// inside "Document" module, you can export submodules freely
// import {DocumentCreate} from "../Create";
import {Document} from "@Document";
import { Button } from './Button';

const Modal = () => {
    return (
        <div>
            Document Modal
            {/* Button z tego submodułu */}
            <Button />

            {/* Case: potrzeba buttonu z innego submodułu,
            ale z jakiegoś powodu nie powinien trafić on do /common */}
            <Document.Create.Button/>

            {/* Problem: Button - 4 Importy sugerowane już w tym projekcie*/}
            {/* Rozwiazanie: zmusić do importu przez moduły,
            niestety <Button /> z tego modułyu bedzie ok, jesli bedzie
            też eksportowany przez "./index.ts" ale w innych wypadkach
            pozostaniemy przy wewnetrznej nazwie tj. <DocumentModalButton /> */}

        </div>
    );
};

export {Modal};
