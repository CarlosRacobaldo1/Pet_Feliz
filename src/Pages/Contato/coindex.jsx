import NavBar from "../../Components/NavBar"
import Footer from "../../Components/Footer"
import styles from "./contato.module.css"
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import{RiWhatsappFill} from 'react-icons/ri'
import{MdEmail} from 'react-icons/md'





function Contato(){
  return (
    <>
    <NavBar/>
    <br/>
    <section className={styles.section}>
      <h1 className={styles.titulo}>Contatos</h1>
      <h2>  Segue aqui a lista de contatos do Pet Feliz</h2>
      <ul className={styles.list}>
        <li className={styles.icone}><MdEmail /> <p className={styles.text}> petfeliz@gmail.com </p> </li>
        <li className={styles.icone}><FaFacebook /> <p className={styles.text}> Pet_Feliz </p></li>
        <li className={styles.icone}><RiWhatsappFill /> <p className={styles.text}> +55(75) 98756-4321</p></li>
        <li className={styles.icone}><AiFillInstagram /> <p className={styles.text}> @Pet_Feliz</p></li>
        <li className={styles.icone}> <FaTwitter /> <p className={styles.text}> @Pet_Feliz</p></li>
      </ul>
    </section>
   

    <Footer/>
  </>
  )
}

export default Contato