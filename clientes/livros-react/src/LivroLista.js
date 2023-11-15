import React, { useState, useEffect} from 'react';
import ControleLivros from './controle/ControleLivros'
import ControleEditora from './controle/ControleEditora'

export const LinhaLivro = ({ livro, excluir }) => {
    const controleEditora = new ControleEditora();
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td className='mx-2 my-3 px-3'>{livro.titulo}<br/>
                <button className='btn btn-danger' onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td className='mx-2 my-3 px-3'>{livro.resumo}</td>
            <td className='mx-2 my-3 px-3'>{nomeEditora}</td>
            <ul className='mt-2'>
                {livro.autores.map((autor, index) => (
                    <li key={index}>{autor}</li>
                ))}
            </ul>
            
        </tr>
    );
}

export default function LivroLista() {
    const [livros, setLivros] = useState ([]);
    const [carregado, setCarregado] = useState (false);

    useEffect(() => {
        if (!carregado) {
            const controladorLivros = new ControleLivros();
            const livrosCarregados = controladorLivros.obterLivros();
            setLivros(livrosCarregados);
            setCarregado(true);
        }
    }, [carregado]);

    const excluir = (codigoLivro) => {
        const controladorLivros = new ControleLivros();
        controladorLivros.excluir(codigoLivro);

        setCarregado(false);
    };

    return (
        <main className='container col-10 mt-3'>
            <h1 className='my-3'>Catálogo de Livros</h1>
            <table className='table table-striped '>
                <thead className='thead-dark'>
                    <tr>
                        <th className='col-2'>Título</th>
                        <th className='col-6'>Resumo</th>
                        <th className='col-1'>Editora</th>
                        <th className='col-1'>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
                    ))}
                </tbody>
            </table>
        </main>
    );
}

