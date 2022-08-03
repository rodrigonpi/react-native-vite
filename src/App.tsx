const App = () => {

  const handleButtonClick = ()=>{
    alert("Botao clicado!")
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Clique aqui</button>
     
    </div>

  );
}


export default App;
