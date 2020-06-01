import React from 'react'
import UsuarioService from '../../app/services/usuarioService'
import { AuthContext } from '../../main/ProvedorAutenticacao'

class Home extends React.Component {

    state = {
        saldo: 0
    }

    constructor() {
        super();
        this.usuarioService = new UsuarioService();
    }


    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3 text-center">Bem vindo!</h1>
                <hr className="my-4" />
                <h2 className="text-center">Últimas atualizações</h2>

            </div>
        )
    }
}
Home.contextType = AuthContext
export default Home