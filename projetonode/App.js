import logo from './logo.svg';
import React from 'react';
import './App.css';

const Painel = () => {
  return (
    <div className="painel">
      painel
    </div>
  )
}

const bloco = () => {
  return (
    <div className="bloco">
      painel
    </div>
  )
}

const Botao = (props) => {
  return (
    <div className={props.tipo}>
      {props.digito}
    </div>
  )
}

function App() {
  return (
    <div className="painel-botoes">
      <Painel/>
      <Botao tipo="botao-ac" digito="AC" />
      <bloco/>
    </div>
  );
}

export default App;
