
import React, {Fragment, useState} from 'react';


const Contador = () => {

    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        console.log('yeaaaaaaaaaaaa')
        setNumero(numero +1)
    }

    return ( 
        <Fragment>
            <h3>Mi primer Componente ! {numero} </h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment> 
     );
}
 
export default Contador;