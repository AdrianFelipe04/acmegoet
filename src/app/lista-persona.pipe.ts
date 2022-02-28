import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listaPersona'
})
export class ListaPersonaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
