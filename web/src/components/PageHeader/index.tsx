import React from 'react';

import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.css';

interface PageHeaderProps {
  title: String;
  description?: String;
}

// O componente PageHeader, é um Conponente escrito em forma de função que recebe as seguintes propriedades
const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
  return (

    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p> }
        {props.children}
      </div>

    </header>

  );
}
export default PageHeader;