import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(nombre: string, apellido: string): string{
      return `${nombre} ${apellido}`;
    }
    }
  


