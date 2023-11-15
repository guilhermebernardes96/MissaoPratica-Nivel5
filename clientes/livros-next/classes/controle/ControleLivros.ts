import Livro from '../modelo/Livro';
import axios, { AxiosResponse } from 'axios';

const baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
    _id: String | null;
    codEditora: number;
    titulo: String;
    resumo: String;
    autores: [String];
}

class ControleLivro {
    async obterLivros(): Promise<Livro[]> {
        try {
            const response: AxiosResponse<LivroMongo[]> = await axios.get(baseURL);
            return Response.data.map((livroMongo) => ({
                _id: livroMongo._id, 
                codEditora: livroMongo.codEditora, 
                titulo: livroMongo.titulo, 
                resumo: livroMongo.resumo, autores: livroMongo.autores}))
        } catch (error) {
            console.error('Erro ao obter livros:', error);
            return [];
        }
    };

    async incluir(livro: Livro): Promise<boolean> {
        try {
          const livroMongo: LivroMongo = {
              _id: livro._id,
              codEditora: 0,
              titulo: undefined,
              resumo: undefined,
              autores: []
          };
          const response: AxiosResponse = await axios.post(baseURL, livroMongo, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          return response.ok;
        } catch (error) {
          console.error('Erro ao incluir livro:', error);
          return false;
        }
    };
    
    async excluir(codigo: string): Promise<boolean> {
        try {
          const response: AxiosResponse = await axios.delete(`${baseURL}/${codigo}`);
          return response.ok;
        } catch (error) {
          console.error('Erro ao excluir livro:', error);
          return false;
        }
      };
};


export default ControleLivro;