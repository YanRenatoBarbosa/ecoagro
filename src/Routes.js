import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import HomePage from './pages/HomePage';
import ConfiguracoesLocais from './pages/ConfiguracoesLocais';
import Ferramenta from './pages/Ferramenta';
import { Resultados } from './pages/Resultados';
import { GlobalStyle } from './styles/GlobalStyle';
import { temaLight } from './styles/themes/light';
import ConnectionProvider from './context/Connection';

const Routes = () => {
  return (

    <ThemeProvider theme={temaLight}>
      <ConnectionProvider>
        <BrowserRouter>
          <GlobalStyle />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/configuracoes-locais" component={ConfiguracoesLocais} />
            <Route exact path="/ferramenta/:plantacao" component={Ferramenta} />
            <Route exact path="/resultados/:idResultado" component={Resultados} />

            <Route component={() => <p>página 404</p>} />
          </Switch>    
        </BrowserRouter>
      </ConnectionProvider>
    </ThemeProvider>
  );
}

export default Routes;
