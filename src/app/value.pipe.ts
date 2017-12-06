import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'value'
})
export class ValuePipe implements PipeTransform {
  transform(value: any, args: any[]): string {
    let obj = args.find(a => a.value == value);
    return (obj !== undefined) ? obj.label : "";
  }

}
