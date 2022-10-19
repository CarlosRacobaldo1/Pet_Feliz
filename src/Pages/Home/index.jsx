import './home.css'
import  NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer'
import PetBox from '../../Components/PetBox';
import LinkButton from '../../Components/LinkButto';



function Home (){
    
    

    return(

        <>
            <NavBar/>
            <br/><br/>
            <section className='familia'>
                
                <div className='familia_text'>
                   TORNE A VIDA DE UM PET MAIS FELIZ!
                    <br/>
                    <br/>
                    <LinkButton to="/catalogo" text=" Adotar"/>
                </div>
            </section>     
           
           <section className='posicao'> 
                <h1 className='titulo'>Recém Chegados!</h1>
                <p className='text'> Veja aqui alguns dos pets disponíveis no catálogo!</p>    
               
           </section>
            
            
          <div className='box'>     
                <PetBox 
                    foto ={require('../../Images/pudim.jpg')} 
                    nome='Pudim' 
                    local='Cruz das Almas, Bahia' 
                    especie='Gato'
                    genero='Fêmea'
                    idade='Filhote'
                    dono='Beltrano'
                    porte='pequeno'
                />
                <PetBox 
                    foto ={require('../../Images/Sr_gato.jpg')}
                    nome='Sr. Gato'
                    local='Salvador, Bahia'
                    especie='Gato'
                    genero='Macho'
                    idade='Filhote'
                    dono='Ciclano'
                    porte='pequeno'
                />
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
          </div>
            <div className='btn'><LinkButton to="/catalogo" text="Veja mais"/></div>   
            <Footer/>
        </>    
    );
}

export default Home