import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalPipe'
})
export class CapitalPipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    // if (value.length>0) {
    //    let firstChar=value[0].toUpperCase();
    //    const remainString=value.substring(1,value.length);
    //    value=firstChar+ remainString;
    // }
    // return value;
    // }

    if (value.length > 0) {
      return  value.split(' ').map(m => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase()).join(' ');
   
    }
    return value;
  }
}
