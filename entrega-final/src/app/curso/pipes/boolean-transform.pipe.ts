import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanTransform'
})
export class BooleanTransformPipe implements PipeTransform {

  transform(Boolean: string, ...args: any[]): string {
    if(Boolean === 'Abierta'){
    return args[0];
  }
  else{
    return args[1];
  }
  }
}
