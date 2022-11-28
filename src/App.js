import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formualrio';
import Time from './componentes/Time';


function App() {
  
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador)
    setColaboradores.push(...colaboradores, colaborador)
  }

  return (
    <div>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Frontend"/>
      <Time nome="Data Science"/>
      
    </div>
  );
}

export default App;
