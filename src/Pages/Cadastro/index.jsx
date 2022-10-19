import styles from './cadastro.module.css'
import Reserva from '../../Components/Reserva'
import LinkButton from '../../Components/LinkButto'
import FormCad from '../../Components/FormCad'

const inicio = new URL('../../Images/PetFeliz.png', import.meta.url) 

function Cadastro(){
    return (
        <>
            <section className={styles.pets}></section>
        <div className={styles.imagem}> 
            <img  src={inicio}  alt='Logo' ></img>
            <h1> Bem vindo ao Pet Feliz!</h1>  
            <div className={styles.posicao}>
                <FormCad/>
                <LinkButton to='/' text='Criar conta'/>
              
            </div>
        </div>
        <Reserva/>  
        </>
    )
}

export default Cadastro