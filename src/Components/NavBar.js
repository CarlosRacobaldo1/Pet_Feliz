import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import LinkButton from "./LinkButto";
import  Container  from './Container';

const logo = new URL('../Images/PetFeliz.png', import.meta.url) 

function NavBar () {
    return(
        <nav class={styles.navbar}>

            <Container>
                    <Link to="/"> <img className={styles.img} src={logo}  alt='Logo' ></img></Link>
                    <ul class={styles.list}>        
                            
                            <li className={styles.item}>
                            <Link to="/sobrenos">Sobre nós</Link>
                            </li>
                            
                            <li className={styles.item}>
                             <Link to="/catalogo">Catalogo</Link>
                            </li>
                           
                            <li className={styles.item}>
                             <Link to="/contato">Contatos</Link>
                            </li>
                            
                            <li className={styles.item}>
                            <Link to="/entrar">Entrar</Link>
                            </li>
                            <li > <LinkButton to="/cadastro" text="Cadastrar-se"/></li>
                    </ul>
                    
            </Container>
            
        </nav>
    )
}

export default NavBar