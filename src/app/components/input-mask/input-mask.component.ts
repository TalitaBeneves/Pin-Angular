import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { BaseConfig, ScannerQRCodeResult, NgxScannerQrcodeService } from 'ngx-scanner-qrcode';
import Instascan from 'instascan';
declare var Instascan: any;

@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.css'],
})
export class InputMaskComponent implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
    let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
    scanner.addListener('scan', function (content) {

      console.log(content);
    });
    Instascan.Camera.getCameras().then(function (cameras) {
      if (cameras.length > 0) {
        scanner.start(cameras[0]);
      } else {
        console.error('No cameras found.');
      }
    }).catch(function (e) {
      console.error(e);
    });
  }
  form!: UntypedFormGroup;
  cpf_cnpj: any;

  // constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.form = this.fb.group({
  //     cpf_cnpj: [null],
  //   });
  // }

  // // isCPF(): boolean {
  // //   return this.cpf_cnpj == null
  // //     ? true
  // //     : this.cpf_cnpj.length < 12
  // //     ? true
  // //     : false;
  // // }

  // // getCpfCnpjMask(): string {
  // //   return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
  // // }



  ngOnInit() {
    // this.form = this.fb.group({
    //   cpf_cnpj: [null],
    // });


  }
}
