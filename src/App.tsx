import { useState } from "react";

const App = () => {
  const [numero, setNumero] = useState(0); 

  const handleMinus = () => {
    setNumero(numero - 1)
  }

  const handleMore = () => {
    setNumero(numero+1)
  }

  return (
    <div>
      <button onClick={handleMore}>+</button>
      <div>{numero}</div>
      <button onClick={handleMinus}>-</button>
    </div>

  );
}


export default App;
