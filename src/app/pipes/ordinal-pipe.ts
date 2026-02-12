import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {

  transform(value: number): string {
    if (isNaN(value)) {
      return '';
    }

    const s = ['th', 'st', 'nd', 'rd'];
    const v = value % 100;
    return value + (s[(v - 20) % 10] || s[v % 10] || s[0]);
  }

}
