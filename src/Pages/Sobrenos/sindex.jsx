import NavBar from "../../Components/NavBar"
import styles from './sobre.module.css'
import Footer from "../../Components/Footer"

function Sobrenos(){
  return (
      <>
        <NavBar/>
        <br/>
        <section className={styles.section}>
          <h1 className={styles.titulo}>Sobre o Pet Feliz</h1>
          <p className={styles.text}>O Pet Feliz é um site em que ONGs e Protetores de todo o Brasil podem divulgar cães e gatos para adoção.</p>
          <h1 className={styles.titulo}>Como funciona</h1>
          <ul className={styles.text}>
            <li>ONGS ou Protetores registram os animais no site</li>
            <li>Possiveis donos vasculham o site em busca de algum animal que chame sua atenção</li>
            <li>Ao achar o animal que desejam, os donos clicam em adotar, para acertar os detalhes da adoção com as ONGS ou Protetores</li>
          </ul>
        </section>

        <Footer/>
      </>
  )
}

export default Sobrenos