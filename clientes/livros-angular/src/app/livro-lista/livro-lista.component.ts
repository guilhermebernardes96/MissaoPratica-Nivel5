import { Component, OnInit } from '@angular/core';
import Editora from '../editora';
import Livro from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
obterNome(arg0: number) {
throw new Error('Method not implemented.');
}
  public editora: Array<Editora> = [];
  public livros: Array<Livro> = [];
  controleLivros: any;

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}
  
  ngOnInit(): void {
    this.controleLivros.obterLivros().then((livros: Livro[]) => {
      this.livros = livros;
    });
  };

  excluir(codigo: string): void {
    this.controleLivros.excluir(codigo).then(() => {
      this.controleLivros.obterLivros().then((livros: Livro[]) => {
        this.livros = livros;
      });
    });
  };

}
