import React from 'react';
// import {Document} from "../Document";
import {Document} from "@Document";
import {User} from '../User';
import {Ravioli} from "../global/Italian/Pasta/ravioli/Ravioli";
// ESLint: Reaching to "../Document/Create/Modal" is not allowed.(import/no-internal-modules)
import {Modal} from "../Document/Create/Modal";

// We manage to made <Form> "internal" (ESLint error)
// import {Form} from "../Modal/Create/Form";
// Modal.Create. // <- No form here too

const FancyView = () => {
    return (
        <>
            Fancy view with document and user
            {/* NOT WORKING*/}
            {/*<Modal/>*/}

            {{/* OK */}}
            <Document.Create.Modal/>

            {/* That's kinda meh (naming according to Document.Modal.Modal)*/}
            <Document.Modal/>
            <User.Avatar/>

            {/* Modal/common is toplevel - easily accessible*/}
            <Document.Status/>

            {/*global-common: no context*/}
            <Ravioli />
        </>
    );
};

export {FancyView};
