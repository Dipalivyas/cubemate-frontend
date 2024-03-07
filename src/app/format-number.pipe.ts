import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(!value) return null;

    if(value >= 1000000){
      return(value / 1000000).toFixed(1) + 'M';
    }
    if(value >= 100000){
      return(value / 100000).toFixed(1) + 'L';
    }else if(value >= 1000){
      return(value / 1000).toFixed(1)  + 'K';
    }else{
      return value;
    }
    return null;
  }

}
