import { Injectable } from '@angular/core';
import Editora from './editora';

@Injectable({
  providedIn: 'root'
})

export class ControleEditoraService {
  editoras: Array<Editora>; 
  
  constructor() {
    this.editoras = [
      new Editora(1, 'Alta Books'),
      new Editora(2, 'Pearson'),
      new Editora(3, 'Addison Wesley')
    ];
  };

  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.find(editora => editora.codEditora === codEditora);
      return editora ? editora.nome : undefined;
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  };
}
