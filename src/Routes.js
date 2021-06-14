import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import HomePage from './pages/HomePage';
import ConfiguracoesLocais from './pages/ConfiguracoesLocais';
import Ferramenta from './pages/Ferramenta';
import { GlobalStyle } from './styles/GlobalStyle';
import { temaLight } from './styles/themes/light';

const Routes = () => {
  return (

    <ThemeProvider theme={temaLight}>
      <BrowserRouter>
        <GlobalStyle />

        <Switch>
          <Route exact path="/" component={() => <HomePage /> } />
          <Route exact path="/configuracoes-locais" component={() => <ConfiguracoesLocais /> } />
          <Route exact path="/ferramenta" component={() => <Ferramenta />} />

          <Route component={() => <p>página 404</p>} />
        </Switch>    
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Routes;
