import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FiltroData } from 'src/app/core/model/filtroData';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
})
export class DatepickerComponent implements OnInit {
  form!: FormGroup;
  valorTela;
  minDate;
  maxDate;
  date;
  mockData;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.mock();
    this.minDate = new Date();
    this.montaForm();
    this.mockData = this.mockData[0].date;
  }

  montaForm() {
    this.form = this.fb.group({
      data: [new Date()],
      dtInicio: [null],
      dtFim: [null],
      tipo: [null],
    });
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

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

  obterData() {
    console.log('a', this.form.value);
  }
}
