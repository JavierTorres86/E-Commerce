import React from 'react';
import '../../Estilos/EstilosProyecto.css';

const Spinner = () => {
    return (
        <div className="spinner-container">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;
