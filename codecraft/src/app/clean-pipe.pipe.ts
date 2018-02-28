import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipePipe implements PipeTransform {

  transform(value: string, args: string): string {
    let newValue = value;
    let list = args.split(",");
    for(let entry of list) {
      if(value.indexOf(entry) != -1) {
        newValue = newValue.replace(entry, "$%#@!");
      }
    }
    return newValue;
  }

}
