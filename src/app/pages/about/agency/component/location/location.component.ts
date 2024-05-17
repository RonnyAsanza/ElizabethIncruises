import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ViewEncapsulation,
} from '@angular/core'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
import { Navigation } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { LocationType, locationData } from '../../data'
import { LightgalleryModule } from 'lightgallery/angular'
import { CommonModule } from '@angular/common'
import type { LightGalleryAllSettings } from 'lightgallery/lg-settings'
register()

@Component({
  selector: 'about-agency-location',
  standalone: true,
  imports: [SwiperDirective, LightgalleryModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './location.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  locationData: LocationType[] = locationData
  index = 0
  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,
    navigation: {
      prevEl: '.prev-gallery',
      nextEl: '.next-gallery',
    },
  }

  settings: Partial<LightGalleryAllSettings> = {
    counter: true,
    getCaptionFromTitleOrAlt: true,
    selector: 'a',
  }
}
