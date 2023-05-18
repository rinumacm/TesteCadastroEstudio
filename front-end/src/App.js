import {Route, Routes } from "react-router-dom";
import { Cadastro } from "./cadastrarstudio"
import {Navegacao} from "./navegacao"
import {Login} from './login'
import { Signup } from "./signup";
import {Home} from './home'
import axios from 'axios'
import { CadastroInstrumento } from "./CadastrarInstrumentos";




function App() {
  return <Routes>
    <Route/>
    <Route path="/" element={<Home/> }/>
    <Route path="/cadastroestudio" element={<Cadastro/> }/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path='/instrumentos' element={<CadastroInstrumento/>}/>
    

  </Routes>

}

export default App;

