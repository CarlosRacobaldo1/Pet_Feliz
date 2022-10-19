import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home  from './Pages/Home'
import Catalogo  from './Pages/Catalogo/cindex'
import Contato  from './Pages/Contato/coindex'
import Sobrenos  from './Pages/Sobrenos/sindex'
import Entrar  from './Pages/Entrar/index'
import Cadastro  from './Pages/Cadastro/index'

function Router (){
   
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route> 
                <Route path='/catalogo' element={<Catalogo/>}></Route>    
                <Route path='/contato' element={<Contato/>}></Route>    
                <Route path='/sobrenos' element={<Sobrenos/>}></Route>    
                <Route path='/entrar' element={<Entrar/>}></Route>    
                <Route path='/cadastro' element={<Cadastro/>}></Route>    
            </Routes>
        </BrowserRouter>
        
    )
}
export default Router