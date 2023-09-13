import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from '../interfaces/beer.interface';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {

  transform(beer: Beer): string {

    if ( !beer.id && !beer.image_url ) {
      return 'assets/no-image.png';
    } else {
      return beer.image_url;
    } 

  }

}
