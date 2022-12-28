import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  minDate: any;
  maxDate: any;
  date: any;
  valorTela: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.montaForm();
    this.minDate = new Date();
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
      data: [null, Validators.required],
    });
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
}
