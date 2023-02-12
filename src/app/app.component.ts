import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { ChaveTipo } from './core/model/filtroData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cpfCnpj: string = '88973636014'; //53990172000116
  periodo;
  chave;
  selected: any;
  tipoCpfCnpj: any;
  pegandoTipo: any;
  cpf: any;
  email: any;

  perguntas = [
    { chave: 'celular', tipo: 1 },
    { chave: 'aleatória', tipo: 3 },
    { chave: 'email', tipo: 2 },
  ];
  pegaForm;
  checked = new UntypedFormControl(null, Validators.required);
  constructor() {}

  ngOnInit(): void {
    this.pegando();
    this.teste2();
  }

  submitForm(e) {
    this.pegaForm = e;
    console.log(this.pegaForm);
  }

  enviar() {
    this.pegaForm;
    console.log(this.pegaForm);
  }

  teste2() {
    const bla = this.perguntas;
    var tipo: any;

    bla.forEach((element) => {
      tipo = bla.find((s) => s.tipo === 0);
    });

    if (tipo) {
      this.cpf = true;
    }

    this.pegandoTipo = tipo.chave;
    console.log('a', tipo.chave);
  }

  pegando(e?: any) {
    this.chave = e;

    const dict: ChaveTipo = {
      chave: this.chave,
      tipo: this.checked.value,
    };

    console.log('dict', dict);
  }
}
