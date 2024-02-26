import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(langs:string[], srch:string):string[] {
  
  if(!srch) {
    return [];
  }
  
  srch = srch.toLowerCase();
  
  return langs.filter(i=>i.toLowerCase().includes(srch));
  }
  
  }
