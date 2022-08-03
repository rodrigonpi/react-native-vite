import { useState } from "react";

const App = () => {
  const [numero, setNumero] = useState(0);
  const [nome, setNome] = useState('Rodrigo')


  const handleButtonClick = () => {
    setNumero(numero+3);
    setNome('Pedro');

  }

  return (
    <div>
      O numero é: {numero}
      O nome é: {nome}
      <button onClick={handleButtonClick}>Clique aqui</button>
     
    </div>

  );
}


export default App;
