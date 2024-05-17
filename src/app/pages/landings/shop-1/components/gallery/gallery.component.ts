import { Component } from '@angular/core'
import { SwiperDirective } from '@components/swiper-directive.component'
import { SwiperOptions } from 'swiper/types'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
import { currency } from 'src/app/states/constants'
// register Swiper custom elements
register()
@Component({
  selector: 'shop-1-gallery',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './gallery.component.html',
  styles: ``,
})
export class GalleryComponent {}
