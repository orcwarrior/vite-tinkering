import React from 'react';
import {Form} from "./Form";
import {Button} from "./Button";

/** Let's imagine that component is composite and uses <Form> and <Button>
 * as they're on the same "module level" */
const Modal = () => {
    return (
        <div>
            Document Create modal
            <Form>
                content
            </Form>
            <Button/>
        </div>
    );
};

export {Modal};
