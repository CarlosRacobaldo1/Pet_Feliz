import NavBar from "../../Components/NavBar"
import Footer from "../../Components/Footer"
import PetBox from "../../Components/PetBox";
import styles from './catalogo.module.css'


function Catalogo(){
 

 
  return (
    
      <>
        <NavBar/>

            <section className={styles.titulo}>Encontre o seu novo amigo!</section>
            <container className={styles.container}> 
              <div id='C1'className={styles.C1}>
                <PetBox 
                    foto ={require('../../Images/pudim.jpg')} 
                    nome='Pudim' 
                    local='Cruz das Almas, Bahia' 
                    especie='Gato'
                    genero='Fêmea'
                    idade='Filhote'
                    dono='Beltrano'
                    porte='pequeno'/> 
                <PetBox
                    foto ={require('../../Images/maia.jpg')} 
                    nome ='Maia' 
                    local='São Felipe, Bahia'
                    especie='Cachorro'
                    genero='Fêmea'
                    idade='Adulto'
                    dono='Feltrano'
                    porte='médio' 
                  /> 
                  <PetBox
                    foto ={require('../../Images/salsicha.jpg')} 
                    nome='Salsicha' 
                    local='Lauro de Freitas, Bahia'
                    especie='Cachorro'
                    genero='Macho'
                    idade='Adulto'
                    dono='Feltrano'
                    porte='médio' 
                  />
                  </div>
              <div id="C2" className={styles.C2}>
                <PetBox  foto ={require('../../Images/Sr_gato.jpg')}
                    nome='Sr. Gato'
                    local='Salvador, Bahia'
                    especie='Gato'
                    genero='Macho'
                    idade='Filhote'
                    dono='Ciclano'
                    porte='pequeno'/> 
                <PetBox
                  foto ={require('../../Images/robin.jpg')} 
                  nome='Robin' 
                  local='Rio de Janeiro, Rio de Janeiro' 
                  especie='Gato'
                  genero='Macho'
                  idade='Adulto'
                  dono='Viliano'
                  porte='médio'
                />
                 <PetBox
                    foto ={require('../../Images/babidi.jpg')} 
                    nome='Babidi' 
                    local='São Paulo, São Paulo' 
                    especie='Gato'
                    genero='Macho'
                    idade='Adulto'
                    dono='Viliano'
                    porte='médio'
                />
                  
                  </div>
              
              <div id='C3'className={styles.C3}>
                <PetBox
                  foto ={require('../../Images/caramelo.jpg')} 
                  nome='Caramelo' 
                  local='Sapeaçu, Bahia'
                  especie='Cachorro'
                  genero='Macho'
                  idade='Adulto'
                  dono='Feltrano'
                  porte='médio'  
                /> 
                <PetBox
                  foto ={require('../../Images/apolo.jpg')} 
                  nome='Apolo' 
                  local='Cruz das Almas, Bahia'
                  especie='Cachorro'
                  genero='Macho'
                  idade='Adulto'
                  dono='Feltrano'
                  porte='grande' 
                /> 
                <PetBox
                    foto ={require('../../Images/mia.jpg')} 
                    nome='Mia' 
                    local='São Paulo, São Paulo' 
                    especie='Gato'
                    genero='Fêmea'
                    idade='Adulta'
                    dono='Beltrano'
                    porte='médio'
                />
                </div>
            </container>
            
            
            <Footer/>

          
      </>
  )
}

export default Catalogo