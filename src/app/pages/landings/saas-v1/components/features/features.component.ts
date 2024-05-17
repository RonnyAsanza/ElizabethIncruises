import { Component } from '@angular/core'
import { SaasFeatureType, saasFeature } from '../../data'
import { LightgalleryModule } from 'lightgallery/angular'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'

@Component({
  selector: 'saas1-features',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  saasFeatureData: SaasFeatureType[] = saasFeature

  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
    selector: 'a',
  }
}
