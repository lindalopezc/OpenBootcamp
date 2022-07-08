import React from 'react';
import { Contact } from '../models/contact.class';
import ComponentB  from './componentB';

const ComponentA = () => {
    const defaulContact = new Contact('Linda', 'Lopez', 'lindalopezramos61@gmail.com', false);
    return (
        <div>
            <ComponentB contact = {defaulContact}></ComponentB>
        </div>
    );
};

export default ComponentA;