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

const StyleInputUsuario = styled.input`
  width: 10%;
`;

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textoNomeUsuario:"",
            mensagem:""
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
        console.log(this.state.textoNomeUsuario) //Teste Usuario
        console.log(this.state.mensagem) //Teste Mensagem
        this.setState ({
          mensagem:""
        });
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
