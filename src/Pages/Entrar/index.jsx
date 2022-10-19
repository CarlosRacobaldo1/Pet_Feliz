import styles from './entrar.module.css'
import Reserva from '../../Components/Reserva'
import LinkButton from '../../Components/LinkButto'
import Form from '../../Components/Form'


const inicio = new URL('../../Images/PetFeliz.png', import.meta.url) 



function Entrar(){
    return (
        <>
       
        <section className={styles.pets} > </section>
        <div className={styles.elementos}> 
            <img  src={inicio}  alt='Logo' ></img>
            <h1> Bem vindo ao Pet Feliz!</h1>  
            <div className={styles.posicao}>
                <Form/>
                <p>Esqueceu a senha? <a href='/cadastro'>Clique aqui</a></p>
                <LinkButton to='/' text='Enviar'/>
                <p>Não possui uma conta?</p>
                <LinkButton to='/cadastro' text='Cadastro'/>
                
            </div>
        </div>
            <Reserva/>

        
        </>
       )
}

export default Entrar