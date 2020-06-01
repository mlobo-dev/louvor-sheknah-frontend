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


    componentDidMount() {

    }


    render() {
        return (
            <div className="jumbotron">
                <button
                    className="btn btn-primary"
                    onClick={e => this.props.history.push('/cadastro-repertorio')}

                >Novo Repetório</button>
            </div>
        )
    }
}
Home.contextType = AuthContext
export default Home