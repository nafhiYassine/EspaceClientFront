import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalTransformer'
})
export class DecimalTransformerPipe implements PipeTransform {

  transform(value: string | number): string {
    if (typeof value === 'number') {
      value = value.toString();
    }

    return value.replace('.', ',');
  }

}
