import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivro from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

const LivroDados = () => {
    const controleLivro = new ControleLivro();
    const controleEditora = new ControleEditora();
    
    const navigate = useNavigate();

    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);
    
    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = (event) => {
        event.preventDefault();
        
        const novoLivro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split('/n'),
            codEditora
        };

        controleLivro.incluir(novoLivro);
        navigate('/');
    };

    return (
        <main className='container'>
            <h1>Dados do Livro</h1>
            <form className='form-group' onSubmit={incluir}>
                <div className='form-group'>
                    <label>Título</label>
                    <input className='form-control' type='text' value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Resumo</label>
                    <textarea className='form-control' value={resumo} onChange={(e) => setResumo(e.target.value)}></textarea>
                </div>
                <div className='form-group'>
                    <label>Editora</label>
                    <select className='form-control' value={codEditora} onChange={tratarCombo}>
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='form-group'>
                    <label>Autores (1 por linha)</label>
                    <textarea className='form-control' value={autores} onChange={(e) => setAutores(e.target.value)}></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>
                    Salvar Dados
                </button>
            </form>
        </main>
    );
}

export default LivroDados;