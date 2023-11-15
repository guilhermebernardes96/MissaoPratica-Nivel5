import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Editora from '../editora';
import Livro from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro;
  public autoresForm: string = "";
  public editoras: Array<Editora> = [];
  controleLivros: any;

  constructor (
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) { 
      this.livro = new Livro("", "", "", [], 0);
   };

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir(livro: any): void {
    this.controleLivros.incluir(livro).then(() => {
      this.router.navigateByUrl('/lista');
    });
  }
}
