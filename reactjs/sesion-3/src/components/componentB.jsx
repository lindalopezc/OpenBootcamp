import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';

const ComponentB = ({contact}) => {

    const [conectado, setConectado] = useState(true);
    const changeStatus = () => {
       setConectado(!conectado)
    }
    return (
        <div>
            <h1>Datos de contacto:</h1>
            <h5>Nombre:{contact.Nombre}</h5>
            <h5>Apelllido:{contact.Apellido}</h5>
            <h5>Email:{contact.Email}</h5>
            <h5>Conectado :{conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h5>
            <button onClick={changeStatus}>Cambiar estado</button>
        </div>
    );
};

ComponentB.propTypes = {
contact: PropTypes.instanceOf(Contact)
};

export default ComponentB;