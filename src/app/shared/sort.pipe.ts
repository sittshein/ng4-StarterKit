import { Pipe, PipeTransform } from '@angular/core';
import { ICharacter } from '../characters/models';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: ICharacter[], args?: any[]) {
    if (!value || !value.sort) { return value; }

    return value.sort((a: ICharacter, b: ICharacter) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) { return -1 }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) { return 1 }
      return 0;
    });
  }
}
