import styles from './Footer.module.css'
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import{MdEmail} from 'react-icons/md';
import  Container  from './Container';

const logo = new URL('../Images/Logo_branca.png', import.meta.url) 

function Footer(){
    return(
        <>
            <footer className={styles.footer}>
                <Container>
                    <img className={styles.img} src={logo}  alt='Logo' ></img>
                    <ul className={styles.list}>  
                        <li><FaTwitter /></li>
                        <li><FaFacebook/></li>
                        <li><AiFillInstagram /></li>
                        <li><MdEmail/></li>
                    </ul>
                </Container>
            </footer>
        </>
    )
}

export default Footer