import { Pipe, PipeTransform } from '@angular/core';
import { ICharacter } from '../models';


@Pipe({
  name: 'characterFilter'
})
export class CharacterFilterPipe implements PipeTransform {

  transform(value: ICharacter[], filterBy: string): ICharacter[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

    return filterBy ? value.filter((c: ICharacter) => c.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
