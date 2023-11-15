import { Injectable } from '@angular/core';
import Livro from './livro';

@Injectable({
  providedIn: 'root'
})

export class ControleLivrosService {
  private baseURL = 'http://localhost:3030/livros';

  obterLivros(): Promise<Livro[]> {
    return fetch(this.baseURL)
      .then((response) => response.json())
      .then((data: LivroMongo[]) =>
        data.map((livroMongo) => ({
          codigo: livroMongo._id,
          titulo: livroMongo.titulo,
          autor: livroMongo.autor,
          ano: livroMongo.ano,
        }))
      );
  }

  excluir(codigo: string): Promise<boolean> {
    return fetch(`${this.baseURL}/${codigo}`, { method: 'DELETE' })
      .then((response) => response.ok);
  }

  incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      _id: '',
      titulo: livro.titulo,
      autor: livro.autor,
      ano: livro.ano,
    };

    return fetch(this.baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livroMongo),
    }).then((response) => response.ok);
  }
}