import React from 'react';
import './App.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <Formulario/>
    </div>
  );
}
//CSS 
const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  display:flex;
  justify-content: center;
  height: 95vh;
`;

const EstiloDiv = styled.div`
  border: 1px solid black;
  margin: 1%;
  width: 384px;
  height: 100%;
  display:grid;
  grid-template-rows: 95% 5%;
`;

const DivInputs = styled.div`
  grid-row: 2 / span 1;
  margin:1%;

`;

// const Array = [
//   {saveTextoNomeUsuario},
//   {saveMensagem}
// ];


class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textoNomeUsuario:"",
            mensagem:"",
            // conversa: false
        };
    }

    aoMudarInputUsuario = e => {
        this.setState({
            textoNomeUsuario: e.target.value
        });
    };

    aoMudarInputMensagem = e => {
        this.setState({
            mensagem: e.target.value
        });
    };

    enviar = (e) => {
        const saveTextoNomeUsuario = this.state.textoNomeUsuario 
        const saveMensagem = this.state.mensagem
        this.setState ({
          mensagem:""
        });  
        // console.log(saveTextoNomeUsuario) //Isso funciona
        // console.log(saveMensagem) //Isso funciona
        return ( //Não funciona 
          <div>
          <p> Abacaxi </p>
          <p> Morango </p>
          </div>
          )
        
    };

render(){
  return (
    <MainContainer>
      <EstiloDiv>
        <DivInputs>
          <input
            type="text" 
            value={this.state.textoNomeUsuario}
            name="usuario" 
            id="usuario"
            onChange={this.aoMudarInputUsuario}
            placeholder="Usuário"
            key="textoNomeUsuario"
            />
          <input 
            type="text"
            value={this.state.mensagem} 
            name="mensagem" 
            id="mensagem"
            onChange={this.aoMudarInputMensagem}
            placeholder="Mensagem"
            key="mensagem"
                />
          <button onClick={this.enviar}>Enviar</button> 
        </DivInputs>    
      </EstiloDiv>
    </MainContainer>
  )
}
}

App.propTypes= {
  textoNomeUsuario: PropTypes.string,
  mensagem: PropTypes.string
}

export default App;
