import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-dinamico',
  templateUrl: './form-dinamico.component.html',
  styleUrls: ['./form-dinamico.component.css'],
})
export class FormDinamicoComponent implements OnInit {
  formConfig = [
    {
      type: 'text',
      label: 'Chave',
      name: 'chave',
      required: true,
    },
    {
      type: 'select',
      label: 'Tipo Chave',
      name: 'tipo',
      required: true,
      options: [
        { value: 0, label: 'CPF/CNPJ' },
        { value: 1, label: 'Celular' },
        { value: 2, label: 'E-mail' },
        { value: 3, label: 'Aleatória' },
      ],
    },
  ];
  form: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      forms: this.fb.array([this.createForm()]),
    });
  }

  get formArray(): FormArray {
    return this.form.get('forms') as FormArray;
  }

  createForm(): FormGroup {
    const formControls = {};
    this.formConfig.forEach((config) => {
      formControls[config.name] = [null, Validators.required];
    });
    return this.fb.group(formControls);
  }

  addForm(): void {
    this.formArray.push(this.createForm());
  }

  submitForm(): void {
    console.log(this.formArray.value);
  }

  removeForm(index: number) {
    this.formArray.removeAt(index);
  }
}
