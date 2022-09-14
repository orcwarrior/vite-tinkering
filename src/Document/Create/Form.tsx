import React, {PropsWithChildren} from 'react';
import {Document} from "../index";

/** This component is supposedly
 * @internal */
const Form = ({children}: PropsWithChildren) => {
    return (
        <div>
            Document Form, status: <Document.Status />
            {children}
        </div>
    );
};

export {Form};
