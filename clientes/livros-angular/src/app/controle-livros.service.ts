import { Injectable } from '@angular/core';
import Livro from './livro';

@Injectable({
  providedIn: 'root'
})

export class ControleLivrosService {
  livros: Array<Livro>;

  constructor() {
    this.livros = [
      new Livro(1, 'Use a Cabeça: Java', 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.', ['Bert Bates', 'Kathy Sierra'], 1),
      new Livro(2, 'Java como Programar', 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel', ['Paul Deitel', 'Harvey Deitel'], 2),
      new Livro(3, 'Core Java for the Impatient', 'Eaders familiar with Horstmanns original, two-volume "Core Java" books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.', ['Cay Horstmann'], 3)
    ];
  };

  obterLivros(): Array<Livro> {
    return this.livros;
  };

  incluir(novoLivro: Livro): void {
    const codigos = this.livros.map(livro => livro.codigo);
      const novoCodigo = codigos.length > 0 ? Math.max(...codigos) + 1 : 1;
      novoLivro.codigo = novoCodigo;
      this.livros.push(novoLivro);
  };

  excluir(codigoLivro: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigoLivro);
    if (index !== -1) {
      this.livros.splice(index, 1);
    };
  };
}
