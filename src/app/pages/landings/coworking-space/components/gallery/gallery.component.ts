import { Component, ViewEncapsulation } from '@angular/core'
import { ourSpace, SpaceType } from '../../data'
import { LightgalleryModule } from 'lightgallery/angular'
import { BeforeSlideDetail } from 'lightgallery/lg-events'
import lgZoom from 'lightgallery/plugins/zoom'
@Component({
  selector: 'coworking-space-gallery',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './gallery.component.html',
  styles: ``,
  encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent {
  allGalary: SpaceType[] = ourSpace
  index = 0
  settings = {
    counter: false,
    plugins: [lgZoom],
    selector: 'a',
  }
}
