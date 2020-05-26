import React from 'react'
import NavbarItem from './nav-bar-item';
import { AuthConsumer } from '../main/ProvedorAutenticacao'

function NavBar(props) {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a href="#/home" className="navbar-brand" >Louvor Sheknah</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <NavbarItem render={props.isUsuarioAutenticado} href="#/home" label="home" />
            <NavbarItem render={props.isUsuarioAutenticado} href="#/cadastro-usuarios" label="Usuários" />
            <NavbarItem render={props.isUsuarioAutenticado} href="#/repertorios" label="Repertório" />
            <NavbarItem render={props.isUsuarioAutenticado} href="#/cadastro-items" label="Músicas" />
            <NavbarItem render={props.isUsuarioAutenticado} onClick={props.deslogar} href="#/login" label="Sair" />

          </ul>

        </div>
      </div>
    </div>
  )
}
export default () => (
  <AuthConsumer>
    {(context) => (<NavBar isUsuarioAutenticado={context.isAutenticado} deslogar={context.encerrarSessao} />)}
  </AuthConsumer>
)