import ApiService from '../apiservice'
import ErroValidacao from '../exceptions/ErroValidacao'
class ItemService extends ApiService {
    constructor() {
        super('/items')
    }

    obterCategorias() {
        return [
            { label: 'Selecione', value: '' },
            { label: 'Categoria 1', value: 'CATEGORIA_1' },
            { label: 'Categoria 2', value: 'CATEGORIA_2' },
            { label: 'Categoria 3', value: 'CATEGORIA_3' }
        ]
    }

    salvar(item) {
        return this.post('/', item)
    }

    listar() {
        return this.get('/')
    }

    validar(item) {
        const erros = []

        if (!item.nome) {
            erros.push('O campo nome é obrigatório')
        }

        if (!item.email) {
            erros.push('O campo email é obrigatório')
        } else if (!item.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
            erros.push('O email informado não é válido')
        }

        if (!item.senha || !item.senhaRepeticao) {
            erros.push('Os campos de senha são obrigatórios')
        } else if (item.senha !== item.senhaRepeticao) {
            erros.push('As senhas não conferem')
        }

        if (erros && erros.length > 0) {
            throw new ErroValidacao(erros)
        }
    }

}
export default ItemService;