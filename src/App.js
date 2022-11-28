import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formualrio';
import Time from './componentes/Time';


function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E9F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: 'A6D157',
      corSecundaria: 'F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: 'E06B69',
      corSecundaria: 'FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: 'DB6EBF',
      corSecundaria: 'FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: 'FFBA05',
      corSecundaria: 'FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: 'FF8A29',
      corSecundaria: 'FFEEDF'
    }
  ]
  
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador)
    setColaboradores.push(...colaboradores, colaborador)
  }

  return (
    <div>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}/>
      
      {times.map(time => <Time key={time.nome} nome={time.nome}/>)}

    </div>
  );
}

export default App;
