import styles from './PetBox.module.css'
import Popup from './Popup'
import { useState } from 'react';
function PetBox ({foto, nome, local, dono, especie, genero, porte, idade}){
   
    const[botaopop, setBotaopop] = useState(false);
    return(
        <> 
            <Popup 
                trigger={botaopop} 
                setTrigger={setBotaopop} 
                nome={nome} 
                foto={foto} 
                local={local}
                dono={dono}
                especie={especie}
                genero={genero}
                porte={porte}
                idade={idade}>
                
            </Popup> 
            <div className={styles.box}>
                <img src={foto} alt={nome}></img>
                <h1> {nome} <span></span> </h1>
                <h2> {local}</h2>
               
                <button className='botao' onClick={() => setBotaopop(true)}>Saiba Mais</button>
            </div>
        </>
    )
}

export default  PetBox