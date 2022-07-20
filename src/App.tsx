//criando componente
import {Header} from './componentes/Header'

const App = () => {
  return (
    <div>
      <Header title="Título da Página"/>
      <Header title="Subtítulo da Página"/>
      <Header/>
      Ola Mundo 
    </div>

  );
}

/*const App = () => {
  let name: string = "Rodrigo"

  return (
  <div>Ola {name}, tudo bem?</div>
  );
}*/

/*const App = () =>{
  return (
    <a href="https://b7web.com.br">Clique aqui!</a>

  );
}*/

export default App;
