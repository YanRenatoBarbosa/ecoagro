import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import { HeaderMain, HeaderSession } from "./style";

export const Header = ({ type = "default", ...rest }) => {
  const history = useHistory();
  const screenIsNotBig = window.innerWidth < 430;

  if (type !== "default" && screenIsNotBig) {
    // needs the props title and helperLink
    return (
      <HeaderSession>
        <div>
          <button onClick={() => history.goBack()} className="btnRetornar">
            <span className="material-icons">arrow_back_ios</span>
          </button>

          <h1>{rest.title}</h1>
        </div>

        <Link to={rest.helperLink}>
          <span className="material-icons">help_outline</span>
        </Link>
      </HeaderSession>
    );
  }

  // needs the props visiblity and setVisiblity
  return (
    <HeaderMain>
      <button className="menu" onClick={() => rest.setVisiblity("visible")}>
        <span className="material-icons">menu</span>
      </button>

      <section className={rest.visiblity}>
        <div className="hiddenOptions">
          <button onClick={() => rest.setVisiblity("invisible")}>Fechar</button>
        </div>
      </section>

      <div className="desktopOptions">
        <Link to="/asd">Exemplo</Link>
        <Link to="/asd">Como funciona</Link>
        <Link to="/asd">Ajuda</Link>
      </div>

      <Link to="/">
        <h1>Ecoagro</h1>
      </Link>
    </HeaderMain>
  );
};
