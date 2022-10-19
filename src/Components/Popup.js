import React from "react";
import styles from "./Popup.module.css"
import {IoCloseCircleOutline} from 'react-icons/io5'
import {IoLocationSharp} from 'react-icons/io5'
import {IoPersonCircle} from 'react-icons/io5'

function Popup (props) {
  return (props.trigger) ? (
    <div className={styles.popup}>
      <div className={styles.popup_inner}>
          
            <div className={styles.preencher}>
                <img  className={styles.img} src={props.foto} alt={props.nome}/>
            </div>
            <div className={styles.elementos}>    
                <h1> {props.nome}</h1>
                <h2> {props.especie}|{props.genero}|{props.idade}|porte: {props.porte}</h2>
                <p> <IoLocationSharp color="#1313DB"/>{props.local}</p>
                <p> <IoPersonCircle color='#1313DB'/>Publicado por {props.dono}</p>
                <h2 className={styles.subt}>História</h2>
                <p></p>
                <h2 className={styles.subt} >Informações adicionais</h2>
                <p></p>

                
                
            </div>
        
            <div className={styles.close} onClick={() => props.setTrigger(false)}> <IoCloseCircleOutline/></div>
            { props.children }
      </div>
    </div>
  ) : "";
}
 
export default Popup;