import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCpf',
})
export class FormatCpfPipe implements PipeTransform {
  // transform(
  //   value: string | number,
  //   ocultarAlgunsValores: boolean = true
  // ): any {
  //   let valorFormatado = value + '';

  //   console.log(valorFormatado);

  //   if (valorFormatado.length == 11) {
  //     valorFormatado = valorFormatado
  //       .padStart(11, '0')
  //       .substr(0, 11)
  //       .replace(/[^0-9]/, '')
  //       .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

  //     if (ocultarAlgunsValores) {
  //       valorFormatado = '***.' + valorFormatado.substr(4, 7) + '-**';
  //     }
  //     return valorFormatado;
  //   }

  //   if (valorFormatado.length == 14) {
  //     valorFormatado = valorFormatado
  //       .padStart(14, '0')
  //       .substr(0, 14)
  //       .replace(/[^0-9]/, '')
  //       .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');

  //     if (ocultarAlgunsValores) {
  //       valorFormatado = '***.' + valorFormatado.substr(3, 10) + '-**';
  //     }

  //     return valorFormatado;
  //   }
  // }
  transform(value: string | number, ocultarAlgunsValores: boolean = true): any {
    let valorFormatado = value + '';

    console.log(valorFormatado);

    if (valorFormatado.length < 11 ) {
      valorFormatado = valorFormatado
        .padStart(14, '0')
        .substr(14)
        .replace(/[^0-9]/, '0')
        .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');

      return valorFormatado;
    } else {
      valorFormatado = valorFormatado
        .padStart(11, '0')
        .substr(0, 11)
        .replace(/[^0-9]/, '0')
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

      console.log(valorFormatado);
      return valorFormatado;
    }
  }
}
