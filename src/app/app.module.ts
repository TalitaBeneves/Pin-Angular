import { FormDinamicoComponent } from './components/form-dinamico/form-dinamico.component';
import { InputMaskComponent } from './components/input-mask/input-mask.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodeInputModule } from 'angular-code-input';
import { LOCALE_ID } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { NgxMaskModule } from 'ngx-mask';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { PinAngularComponent } from './components/pin-angular/pin-angular.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { FormatCpfPipe } from './core/pipe/formatCpf.pipe';
import { AnimatedCheckmarkComponent } from './components/animated-checkmark/animated-checkmark.component';

registerLocaleData(localePT);
@NgModule({
  declarations: [AppComponent, InputMaskComponent, FormDinamicoComponent, PinAngularComponent, AnimatedCheckmarkComponent,DatepickerComponent, FormatCpfPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CodeInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgxScannerQrcodeModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-Br' },
    { provide: LOCALE_ID, useValue: 'pt-br' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
