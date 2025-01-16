import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'I love Angular',
      autoria: 'Silva C. Gerson',
      modelo: 'modelo3'
    },
    {
      conteudo: 'I love Java',
      autoria: 'Silva C. Gerson',
      modelo: 'modelo2'
    },
    {
      conteudo: 'I love JavaScript',
      autoria: 'Silva C. Gerson',
      modelo: 'modelo1'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
