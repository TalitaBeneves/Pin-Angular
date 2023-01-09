import { ChaveTipo, FiltroData } from './model/filtroData';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MockDataService } from './service/mockData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  minDate
  maxDate
  date
  valorTela
  mockData
  cpfCnpj: string = '88973636014'; //53990172000116
  periodo
  chave
  selected: any;
  tipoCpfCnpj: any;
  pegandoTipo: any;
  cpf: any
  email: any

  perguntas = [
    { chave: 'celular', tipo: 1 },
    { chave: 'aleatória', tipo: 3 },
    { chave: 'email', tipo: 2 },
  ];

  checked = new FormControl(null, Validators.required);
  constructor(
    private fb: FormBuilder,
    private mockDataService: MockDataService
  ) {}

  ngOnInit(): void {
    this.montaForm();
    this.minDate = new Date();
    this.mock();
    this.pegando();
    this.teste2();

    this.mockData = this.mockData[0].date;
  }

  teste2() {
    const bla = this.perguntas;
    var tipo: any;

    bla.forEach((element) => {
      tipo = bla.find((s) => s.tipo === 0 );
    });

    if (tipo) {
      this.cpf = true
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

  // this called every time when user changed the code
  onCodeChanged(code: string) {
    console.log('Change', code);
  }

  // this called only if user entered full code
  onCodeCompleted(code: string) {
    console.log('Completed', code);
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  montaForm() {
    this.form = this.fb.group({
      data: [new Date()],
      dtInicio: [null],
      dtFim: [null],
      tipo: [null],
    });
  }

  teste() {
    let bla = this.form.get('tipo')?.value;

    if (bla.length == 11) {
      bla = 'F';
      return console.log(bla);
    }

    if (bla.length == 14) {
      return (bla = 'J');
    }

    console.log('A', bla);
    return;
  }

  confirma() {
    this.valorTela = this.form.get('data')?.value;
    // const dataAtual = new Date().toLocaleString();
    if (this.valorTela > new Date()) {
      alert('Data futura');
      console.log(new Date().toLocaleString());
    } else {
      alert('Data Atual');
    }
  }

  mock() {
    return (this.mockData = [
      {
        date: '11/12/2022 20:22:09',
      },
    ]);
  }

  getDate(dias: any, e: any) {
    let dia = new Date(new Date().getTime() - dias * 24 * 60 * 60 * 1000);
    let diaFim = new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000);

    const datas: FiltroData = {
      dataInicio: dia,
      dataFim: diaFim,
    };

    var d = '12/05/2019 12:00:00 AM';

    //vai ficar assim na quando vc receber a data no "meusComprovantesPix"periodo.split(' ')[0]

    console.log(d.split(' ')[0]);

    console.log('diaIni', datas.dataInicio.toLocaleDateString());
    console.log('diaFim', datas.dataFim.toLocaleDateString());

    // const currentDate = new Date();
    // console.log('getDate Hoje', currentDate.toLocaleDateString());
    // const doisDias = new Date(currentDate.setDate(currentDate.getDate() - 2));
    // const cincoDias = new Date(currentDate.setDate(currentDate.getDate() - 5));
    // console.log('getDate Ontem', cincoDias.toLocaleDateString());
    // console.log('getDate',currentDate.toLocaleDateString() + ' ' + cincoDias.toLocaleDateString());
  }

  obterData() {
    console.log('a', this.form.value);
  }
}
